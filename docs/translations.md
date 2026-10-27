# Sistema de traducciones

El contenido escrito en el repositorio es la fuente principal de traducciones.
PostgreSQL conserva las lecciones, los ejercicios y traducciones adicionales.
Una fila ausente o desactualizada en `translations` ya no impide mostrar un
texto que está disponible en el catálogo del proyecto.

## Catálogo y resolución

- `src/content/lessons.ts` reúne las lecciones publicables sin acceder a la base de datos.
- `src/content/translations/all.ts` contiene las traducciones escritas por clave.
- `src/content/translations/catalog.ts` reúne esas traducciones, las generadas para vocabulario, wh-words, modismos y gerundios, y los catálogos localizados en `src/content/translations/localized/{zh,ko,ja}.json` generados a partir del español. Las traducciones escritas prevalecen sobre los valores generados; cada combinación de clave e idioma se inserta una sola vez.
- `src/lib/translate.ts` busca primero en el catálogo del idioma solicitado, después en PostgreSQL para las claves ausentes y finalmente repite ese orden en inglés. Un lote completamente cubierto por el catálogo no hace consultas de traducción a PostgreSQL.
- `src/lib/i18n-tokens.ts` define la sintaxis `{{i18n:clave}}` compartida por la resolución de contenido y su validación.
- `getLessonBySlug` devuelve el mapa resuelto que usa la página y `ExerciseRunner`, evitando una segunda consulta de las mismas claves.

Las opciones, palabras y respuestas de los ejercicios permanecen en inglés
para conservar la práctica del idioma. Se traducen las instrucciones,
explicaciones, consejos y los campos que referencian tokens explícitos.

## API y panel de traducción

`GET /api/translate?key=...&locale=...` devuelve `key`, `locale` (solicitado),
`value`, `resolvedLocale` (idioma del texto), `fallback` y `source`
(`catalog` o `database`). Una clave desconocida devuelve 404 con `no-store`,
en lugar de devolver y cachear la clave interna como texto. Los resultados
válidos tienen caché de 60 segundos.

`TranslationReveal` comprueba el estado HTTP y el formato de la respuesta,
cancela peticiones al cambiar de pregunta o cerrar el panel y evita mostrar
respuestas anteriores. Sus controles y mensajes están localizados para los
cinco idiomas soportados. Si utiliza inglés como respaldo, lo indica y
etiqueta el texto con su idioma real.

Los cinco idiomas soportados (`en`, `es`, `zh`, `ko`, `ja`) tienen cobertura
completa del catálogo de lecciones, ejercicios, interfaz (`ui.*`), sistema de
tarjetas (`vocabulary.srs.*`) y las 5,000 palabras NGSL-GR (significado,
ejemplo y acepciones alternativas), tomando como fuente base las traducciones y
explicaciones revisadas en español (`src/content/translations/localized/{zh,ko,ja}.json`,
generadas con `scripts/build-localizations.ts --allow-google`). No se registran
copias inglesas como si fueran traducciones a otros idiomas.

## Validación y mantenimiento

```sh
pnpm validate:translations
pnpm test:translations
pnpm typecheck
pnpm build
```

La validación revisa las claves de todas las lecciones y ejercicios, sus tokens
anidados y las claves `ui.*` y `vocabulary.srs.*` del catálogo. Exige cobertura
del 100% en los cinco idiomas soportados (`en`, `es`, `zh`, `ko`, `ja`),
comprueba las huellas de origen (`catalogSourceHash`) y la presencia de
escritura de destino en `zh`, `ko` y `ja`, y rechaza textos vacíos, claves como
valores, marcadores internos, tokens sin resolver y filas duplicadas. Se ejecuta
antes del build y antes de `db:seed` o `db:reset`.

Para auditar el contenido publicado de la base de datos sin modificarlo:

```sh
node --env-file=.env --import tsx scripts/validate-translations.ts --db
```

La auditoría cuenta filas faltantes y comprueba si el catálogo las resuelve.
No reemplaza una revisión humana de la calidad lingüística. Los comandos
`db:seed` y `db:reset` borran y reconstruyen el contenido de la base de datos;
no son necesarios para aplicar correcciones a textos existentes en el catálogo.

Cuando agregues una lección, regístrala en `src/content/lessons.ts`, agrega sus
traducciones en inglés y español y ejecuta las comprobaciones. Para completar
otro idioma, agrega traducciones reales en `all.ts`; el respaldo inglés no debe
contarse como traducción localizada.
