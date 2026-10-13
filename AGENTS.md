# Instrucciones para agentes

Este archivo aplica a todo el repositorio. Léelo antes de modificar el proyecto.

## Actualización obligatoria

- **Cada vez que modifiques el proyecto, actualiza también este `AGENTS.md` como parte de la misma tarea, antes de darla por terminada.** Esto incluye cambios de código, contenido, estilos, dependencias, configuración y documentación.
- Ajusta las secciones afectadas para que describan el estado final del proyecto: estructura, stack, comandos, configuración, reglas y decisiones relevantes.
- Registra cada tarea que produzca cambios en la sección «Registro de cambios», con fecha, resumen breve y validación realizada. Si no cambia la arquitectura ni las instrucciones, agrega igualmente la entrada del registro.
- Las tareas de consulta sin modificaciones no requieren una actualización.
- Mantén las instrucciones concisas y vigentes; corrige información obsoleta y evita duplicar documentación extensa. Nunca incluyas secretos ni valores reales de `.env`.
- Al cerrar la tarea, revisa el diff y confirma que este archivo refleja los cambios. Indica las comprobaciones realizadas y cualquier limitación pendiente.

## Contexto actual

- Aplicación para aprender inglés mediante lecciones de gramática y ejercicios de vocabulario, con puntos, progreso local, traducciones y temas claro/oscuro.
- Astro 7.3.8 con renderizado en servidor y `@astrojs/node` 11.1.7 en modo `standalone` (requiere Astro ^7.2.1). Las integraciones usan rangos compatibles, no `latest`. `compressHTML: true` conserva el espaciado de Astro 6.
- React 19 y TypeScript 6.0.3 para componentes interactivos; Framer Motion 14.2.0 para animaciones. Mantén TypeScript en la versión mayor 6 mientras `astro check` no admita la 7.
- Tailwind CSS v4 mediante `@tailwindcss/vite`.
- PostgreSQL mediante `pg`. La conexión requiere `DATABASE_URL`; consulta `.env.example` para el formato y `src/lib/db.ts` para la implementación.
- Gestor de paquetes: pnpm, fijado en `package.json` a `pnpm@10.0.0`. Requiere Node >=22.12.0; el despliegue usa la imagen mantenida de Node 22.
- Despliegue configurado para Railway mediante `Dockerfile` y `railway.toml`; entrada de producción: `dist/server/entry.mjs`.
- El README contiene referencias antiguas a SQLite. Para la base de datos, sigue el código y la configuración actuales hasta que esa documentación se actualice.

## Mapa del proyecto

- `src/pages/`: páginas Astro y endpoints en `api/`.
- `src/components/`: componentes React, ejecución de ejercicios, feedback y progreso.
- `src/components/exercises/`: implementaciones de los seis tipos de ejercicio.
- `src/content/lessons/`: contenido de lecciones de gramática.
- `src/content/vocabulary/`: vocabulario y generación de bloques.
- `src/content/translations/`: traducciones del contenido.
- `src/content/lessons.ts`: registro compartido de lecciones para seed y validación.
- `src/content/translations/catalog.ts`: catálogo único para el servidor y el seed, con claves únicas por idioma y prioridad del contenido escrito sobre valores generados.
- `src/lib/`: acceso a datos, seed, puntos, traducción y utilidades.
- `src/lib/schema.sql`: definición del esquema PostgreSQL, inicializado desde `src/lib/db.ts`.
- `src/types.ts` y `src/content/types.ts`: contratos de datos y contenido.
- `src/styles/global.css`: estilos, tokens de diseño y animaciones globales.
- `scripts/`: herramientas de validación y verificación.
- `docs/design.md`: especificación técnica y visual que deben respetar los cambios de interfaz.
- `docs/translations.md`: resolución, respaldo, API y mantenimiento de traducciones.
- `docs/deployment.md`: compatibilidad del adaptador, comprobación de arranque y diagnóstico del despliegue.

## Comandos y verificación

- `pnpm install --frozen-lockfile`: instalar las dependencias exactas de `pnpm-lock.yaml`, como en CI y Docker.
- `pnpm dev`: iniciar el servidor de desarrollo.
- `pnpm typecheck`: ejecutar `astro check` y TypeScript sin emitir archivos.
- `pnpm build`: generar la aplicación de producción y ejecutar `pnpm verify:runtime` antes de considerar el build aprobado.
- `pnpm verify:runtime`: iniciar temporalmente el build en producción y verificar `/`, una hoja CSS y la API de traducción sin credenciales ni escrituras de base de datos; detiene el proceso al terminar. El Dockerfile repite esta comprobación como usuario `node` después de retirar dependencias de desarrollo y `src`.
- `pnpm test:runtime`: comprobar que la verificación del arranque rechace una caída con `app.getLogger is not a function`.
- `pnpm validate`: validar los ejercicios publicados en la base de datos; requiere `.env`, `DATABASE_URL` y acceso a PostgreSQL con contenido cargado.
- `pnpm validate:translations`: validar cobertura en inglés y español, tokens, valores y unicidad del catálogo sin conexión a PostgreSQL. Se ejecuta antes del build y de seed/reset.
- `pnpm test:translations`: pruebas de regresión de traducciones, API y carga de lecciones con PostgreSQL simulado.
- `node --env-file=.env --import tsx scripts/validate-translations.ts --db`: auditoría de solo lectura de traducciones del contenido publicado.
- `pnpm db:seed`: borrar y reconstruir el contenido en PostgreSQL. Requiere autorización del usuario para reemplazar el contenido de esa base de datos.
- `pnpm db:reset`: vaciar las tablas de contenido y volver a cargarlas. Ejecutar únicamente si el usuario ha autorizado el reinicio de esa base de datos.

Selecciona las comprobaciones según el cambio: tipos y build para código o configuración; validación de ejercicios para cambios de contenido cuando haya una base de datos adecuada disponible; revisión visual para cambios de interfaz. En cambios exclusivamente documentales, revisa el contenido y el diff. No declares una comprobación como aprobada si no se ejecutó.

## Reglas de trabajo

- Conserva los cambios existentes del usuario y limita las modificaciones al alcance solicitado.
- Actualiza dependencias con pnpm (`pnpm add -w` o `pnpm add -Dw`) y entrega juntos `package.json` y `pnpm-lock.yaml`. Nunca edites el lockfile manualmente. Tras cambiar versiones, comprueba una instalación con `--frozen-lockfile` y la compatibilidad de las dependencias pares; no actualices pnpm sin una necesidad explícita.
- Mantén `strict-peer-dependencies=true` en `.npmrc`. Astro y sus adaptadores deben satisfacer sus requisitos pares: un build compilado puede fallar al arrancar si se mezclan versiones incompatibles. No desactives la comprobación para permitir esa combinación.
- Consulta los archivos afectados y sus contratos antes de editar; usa el código y la configuración para verificar las descripciones de la documentación.
- Mantén separadas las secciones `/lessons` y `/vocabulary` y conserva la navegación entre bloques de vocabulario.
- Al agregar o modificar lecciones, revisa su integración en `src/content/lessons.ts`, sus traducciones y los contratos de ejercicios.
- Resuelve traducciones mediante `src/lib/translate.ts` y el catálogo compartido. Nunca muestres claves internas al usuario ni registres copias inglesas bajo otro idioma como traducciones reales. El API informa `resolvedLocale` y `fallback`; chino, coreano y japonés tienen cobertura parcial.
- Para cambios visuales, sigue `docs/design.md`: prioridad móvil, soporte claro/oscuro y ausencia de resplandores neón.
- No sobrescribas el progreso almacenado en `localStorage` sin considerar compatibilidad con los datos existentes.
- No publiques credenciales, no agregues `.env` al control de versiones y no edites manualmente artefactos generados en `dist/`, `.astro/` o `node_modules/`.

## Registro de cambios

- 2026-10-13: Se creó `AGENTS.md` con contexto verificado del proyecto, comandos, reglas de trabajo y obligación de actualizarlo en cada tarea que modifique el repositorio. Validación: revisión de código y configuración y comprobación del diff; cambio exclusivamente documental.
- 2026-10-13: Se corrigió la ausencia de `exercise.conditionals-all.2.prompt` en inglés en PostgreSQL mediante un catálogo compartido entre runtime y seed. Se eliminaron duplicados del seed, se reutilizó el mapa de la lección, se mejoró el panel con cancelación de peticiones y respaldo explícito, y se agregó validación previa al build/seed. Auditoría: 82 lecciones, 3,599 claves de contenido/UI cubiertas en inglés y español; consulta de solo lectura a 66 lecciones publicadas detectó 552 filas faltantes en inglés y 372 en español, todas resueltas por el catálogo. Validación: 10 pruebas, tipos, build y revisión en navegador del segundo ejercicio con traducción al español; sin escrituras a PostgreSQL.
- 2026-10-13: Se actualizaron Astro de 6.4.8 a 7.3.8 y Framer Motion de 12.43.0 a 14.2.0 usando pnpm 10.0.0, que regeneró `pnpm-lock.yaml`. Se fijó TypeScript en ^6.0.3 porque `astro check` rechazó TypeScript 7, se declaró Node >=22.12.0 y se conservó `compressHTML: true`. Se actualizaron README, especificación y comentarios de despliegue. Validación: instalación limpia temporal con `--frozen-lockfile --offline --strict-peer-dependencies` sin descargas, lockfile sin modificaciones durante la instalación congelada, 10 pruebas aprobadas, cobertura de traducciones, tipos y build aprobados; navegador con SSR, cierre de modal, feedback, transición entre ejercicios y traducción sin errores de consola. Docker no pudo verificarse por falta de acceso a su API.
- 2026-10-13: Se diagnosticó el error de deploy `app.getLogger is not a function`: el lockfile anterior mezclaba Astro 6.4.8 con el adaptador Node 11.1.7, que requiere Astro ^7.2.1. Se fijaron rangos de integraciones con pnpm, se activaron requisitos pares estrictos y se añadió verificación HTTP del servidor de producción al build y a la imagen final del Dockerfile. Validación: instalación congelada, tipos, 11 pruebas, build con arranque, GET /, CSS y API; arranque con Node 22.23.3 del log y copia temporal sin src con dependencias de producción aprobados. Docker no accesible; consulta a Railway rechazada por sesión vencida, por lo que no se confirmó un despliegue remoto.
