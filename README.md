# English Learning

Aplicación de inglés con lecciones gramaticales, vocabulario de clase y un mazo de **5,000 palabras NGSL-GR** con repetición espaciada FSRS.

## Aprendizaje

- `/lessons`: gramática y ejercicios de seis tipos, con traducción, feedback y puntos.
- `/vocabulary`: repaso diario con respuesta oculta, cuatro valoraciones e intervalos individuales; biblioteca bilingüe, ejemplos, audio y estadísticas.
- Reconocimiento inicial y producción opcional. Diez tarjetas nuevas al día y 90% de retención objetivo como ajustes iniciales, modificables.
- Repaso libre para exámenes que conserva el calendario de estudio.
- Progreso de tarjetas en IndexedDB, copias JSON exportables/restaurables y funcionamiento sin conexión tras descargar el mazo.
- Progreso y puntos anteriores de lecciones en `localStorage`, conservados. El historial de los bloques antiguos se archiva sin convertir aciertos en fechas FSRS inventadas.
- Los siete temas basados en las fotos de clase mantienen su propio recorrido de ejercicios.
- Interfaz clara/oscura, prioridad móvil y soporte de teclado. Las instrucciones de tarjetas están completas en inglés/español; otros idiomas tienen respaldo explícito en inglés.

## Stack

Astro 7.3.8 con `@astrojs/node` 11.1.7 en modo standalone, React 19, TypeScript 6, Tailwind CSS 4 y Framer Motion 14.2.0. PostgreSQL mediante `pg` sirve lecciones y traducciones. El catálogo de flashcards se entrega desde las fuentes versionadas del build y no requiere PostgreSQL.

`ts-fsrs` 5.4.2 está fijado exactamente; `idb` proporciona las transacciones locales. No hay inicio de sesión ni sincronización automática entre dispositivos o con AnkiWeb. La copia JSON permite trasladar el progreso de tarjetas entre navegadores.

## Desarrollo

Requiere Node >=22.12.0 y pnpm 10.0.0. El despliegue usa Node 22.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Para consultar lecciones en PostgreSQL, configura `DATABASE_URL` siguiendo `.env.example`. No publiques credenciales. El contenido fuente nuevo de lecciones se sincroniza con `pnpm db:seed` mediante upserts que conservan identificadores; requiere autorización para modificar la base seleccionada. `pnpm db:reset` vacía el contenido y necesita autorización explícita de reinicio.

El mazo de 5,000 flashcards se actualiza con el código y el catálogo; no requiere seed/reset.

## Verificación

```sh
pnpm validate:source
pnpm validate:vocabulary
pnpm validate:translations
pnpm test
pnpm typecheck
pnpm build
pnpm test:e2e
```

El build ejecuta las validaciones de contenido y comprueba el arranque de producción, una página, CSS, traducción y el catálogo de 5,000 palabras sin credenciales de PostgreSQL. Las pruebas E2E usan `ENGLISH_E2E=1` con fixtures locales; ese modo no debe habilitarse en producción.

## Organización

| Ruta | Contenido |
|---|---|
| `src/content/lessons/` | Gramática |
| `src/content/class-notes/` | Lecciones y vocabulario de las fotos |
| `src/content/vocabulary/` | Catálogo NGSL-GR, ediciones editoriales, procedencia y archivo antiguo |
| `src/content/translations/` | Catálogo compartido de traducciones |
| `src/components/vocabulary/` | Experiencia de flashcards |
| `src/lib/vocabulary/` | FSRS, cola, reloj, IndexedDB y copias |
| `src/lib/schema.sql` | Esquema de contenido PostgreSQL |
| `public/vocabulary-sw.js` | Caché sin conexión de vocabulario |
| `scripts/` | Validaciones, generación y pruebas |

## Documentación

- [Sistema de vocabulario, fuentes y copias](docs/vocabulary-srs.md)
- [Trazabilidad de las notas de clase](docs/class-notes.md)
- [Diseño y accesibilidad](docs/design.md)
- [Traducciones](docs/translations.md)
- [Despliegue y diagnóstico de arranque](docs/deployment.md)

Railway usa `Dockerfile`, `railway.toml` y la entrada `dist/server/entry.mjs`. Las bibliotecas y los datos tienen licencias independientes; la página `/vocabulary/sources` muestra las atribuciones y cada ejemplo conserva su procedencia.
