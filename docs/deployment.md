# Validación del despliegue

## Incidente del 13 de octubre de 2026

El contenedor terminaba al arrancar con:

```text
TypeError: app.getLogger is not a function
```

El lockfile anterior combinaba Astro 6.4.8 con `@astrojs/node` 11.1.7.
Ese adaptador requiere Astro `^7.2.1` y llama a `app.getLogger()`, una API
disponible en el núcleo instalado de Astro 7. La compilación por sí sola no
detectaba el fallo: ocurría al ejecutar `dist/server/entry.mjs`.

La combinación actual es Astro 7.3.8 y `@astrojs/node` 11.1.7. Las integraciones
Node y React y el comprobador de Astro utilizan rangos de versión compatibles
en `package.json`, y `pnpm-lock.yaml` conserva las versiones exactas. La opción
`strict-peer-dependencies=true` de `.npmrc` impide instalar una combinación
que incumpla los requisitos de las dependencias pares.

## Comprobaciones

```sh
pnpm install --frozen-lockfile
pnpm typecheck
pnpm test:translations
pnpm test:runtime
pnpm build
```

`pnpm build` valida las traducciones, genera el build y ejecuta
`pnpm verify:runtime`. Esta última comprobación:

1. Inicia el mismo entrypoint que usa Railway, en producción y un puerto local temporal.
2. Exige una respuesta HTTP 200 de `/` y comprueba contenido renderizado.
3. Comprueba que el servidor entregue una hoja CSS del build y la traducción conocida de un ejercicio.
4. Detecta si el proceso se cae antes o inmediatamente después del arranque y lo detiene al terminar.

No carga `.env`, no necesita credenciales de PostgreSQL y no modifica la base
de datos. Se comprueba disponibilidad del servidor; no se comprueba la salud
de PostgreSQL. `pnpm test:runtime` verifica que un proceso que falla con el error
`app.getLogger` haga fallar el comando de verificación.

El `Dockerfile` ejecuta la instalación congelada con dependencias pares
estrictas. También vuelve a ejecutar la comprobación del servidor después de
`pnpm prune --prod`, de retirar `src` y de cambiar al usuario `node`. Así se
valida el contenido final de la imagen antes del despliegue.

La corrección se validó con Node 22.23.3 (la versión del log), además del Node
26 local, y con una copia temporal sin `src` y con dependencias de producción.
Docker no pudo ejecutarse localmente por falta de acceso a su API.

## Aplicar la corrección en Railway

Publica juntos `package.json`, `pnpm-lock.yaml`, `.npmrc`, `Dockerfile`,
`scripts/verify-runtime.mjs` y el resto de los cambios del proyecto. Railway
debe construir un nuevo despliegue desde ese commit; reiniciar la imagen
anterior conserva la combinación incompatible.

No se confirmó un despliegue remoto desde esta sesión: la CLI respondió
`Unauthorized` al consultar el estado. Hace falta recuperar la sesión de
Railway para consultar el estado y los logs del nuevo despliegue.

## Salud del servicio y PostgreSQL

- `GET /api/health/live`: devuelve 200 si el runtime HTTP funciona. No abre
  conexiones ni modifica el esquema; sirve para comprobar una imagen sin credenciales.
- `GET /api/health/ready`: devuelve 200 si PostgreSQL responde y existe una
  lección publicada con ejercicios. Devuelve 503 si no hay conexión, faltan
  tablas o falta contenido. Sólo ejecuta `SELECT`; nunca inicializa ni carga datos.

Ambas respuestas utilizan `Cache-Control: no-store` y mensajes genéricos sin
credenciales. La disponibilidad de PostgreSQL se debe comprobar con `ready`;
una respuesta correcta de la portada o de `live` no comprueba la base de datos.

El pool limita la espera de conexión a 5 segundos, las consultas y los
statements PostgreSQL a 8 segundos y las conexiones inactivas a 30 segundos.
Los errores de conexiones inactivas tienen un listener. La inicialización
del esquema comparte una promesa entre peticiones, se ejecuta en transacción
con bloqueo asesor entre réplicas y se puede reintentar después de un fallo.
Las variables del entorno de producción preceden las cargadas durante el build.

## Contenido, IDs y caché

`pnpm db:seed` sincroniza por `slug`, `(lesson_id, prompt_key)` y `(key, locale)`
mediante upserts. Conserva los IDs existentes de lecciones y ejercicios para
mantener compatible el progreso guardado. No borra contenido adicional de la
base de datos. El esquema añade el índice único de ejercicios sin recrear tablas
y retira el índice de traducción redundante con la restricción `UNIQUE` existente.
`pnpm db:reset` sigue reemplazando las tablas de contenido y sus IDs; requiere
autorización explícita para esa base de datos.

El vocabulario ampliado necesita una sincronización mediante `db:seed` en la
base de datos del despliegue. Los seis ejercicios originales de cada bloque
conservan sus claves; los nuevos se insertan sin reemplazar sus IDs. Desplegar
el código por sí solo no inserta esos nuevos ejercicios. Ningún seed/reset ni
migración se ejecutó contra PostgreSQL durante la implementación local.

Las listas, detalles y consultas del siguiente bloque tienen un caché de
contenido por idioma de hasta 128 entradas por proceso, con TTL de 60 segundos.
Comparte cargas concurrentes, devuelve copias independientes y no conserva
consultas fallidas. `invalidateContentCache()` limpia el proceso actual; el seed
lo invoca después del commit. Otros procesos y las respuestas HTTP ya cacheadas
se actualizan cuando vencen sus propios TTL. Si se necesita actualización
inmediata en todas las réplicas, reinícialas tras la sincronización.

Las páginas piden listas filtradas en SQL con `listLessons(locale, { category })`.
El siguiente bloque se obtiene mediante una consulta específica con `LIMIT 1`,
sin cargar ni traducir todo el catálogo. Cada payload JSON se analiza una sola
vez por carga de detalle.

## Telemetría

`Server-Timing: app;dur=...` permite ver el tiempo de respuesta del servidor en
las herramientas del navegador. `queryDb()` agrega cantidad, fallos y duración
por operación; el middleware agrega peticiones por familia de estado HTTP.
Los errores se registran con operación y código seguro, nunca con SQL,
parámetros, mensajes originales, URLs ni credenciales.

`recordWebVital()` mantiene distribuciones acotadas de LCP, INP y CLS con
cantidades, suma, máximo y clasificación de calidad. `getServerMetrics()` ofrece
una copia de los agregados para integraciones internas. Los agregados viven
en memoria y se reinician con el proceso; no constituyen almacenamiento histórico.
El middleware registra un resumen `performance.summary` como máximo una vez
por minuto mientras llega tráfico. Se pueden consultar estos resúmenes en los
logs del despliegue sin exponer un endpoint público de métricas.

Las regresiones del backend se ejecutan con PostgreSQL simulado, sin conexión:

```sh
node --import tsx --test scripts/backend.test.ts scripts/translations.test.ts
```
