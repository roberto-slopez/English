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
