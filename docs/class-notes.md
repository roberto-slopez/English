# Notas de clase: integración y mantenimiento

Integración del 17 de octubre de 2026, basada en las 38 fotos de `notes/`. Se revisa el texto impreso por separado de las respuestas manuscritas: una marca de corrección no sustituye la validación de la respuesta. Las fotos 35, 36 y 37 repiten, respectivamente, las hojas de 10, 8 y 9.

## Contenido y trazabilidad

| Fotos | Tema | Destino |
|---|---|---|
| 1–5, 8, 36 | Hábitos pasados, estados/acciones, preguntas y negativas; ropa y rutinas | Ampliación de `future-forms-and-used-to`: 17–28 |
| 11 | Presente simple, will habitual, tend to, always/constantly + continuo | Nueva `present-habits`: 1–20 |
| 15, 18, 20 C, 24 | Participios presentes: relativas activas y acciones simultáneas con el mismo sujeto | Nueva `present-participles`: 1–20 |
| 19 B, 20 B, 21, 22, 25 A, 30 | Pronombres relativos, posesión, comas, referencia | Ampliación de `relative-clauses`: 17–26 |
| 21 B, 25 B, 26, 31 | Reducción por omisión de pronombre + be; adjetivos, participios y aposiciones | Ampliación de `reduced-relative-clauses`: 21–28 |
| 14 | Disposición/rechazo, passionate about, anxious to, be prepared to | Ampliación de `willingness-and-unwillingness`: 21–28 |
| 12 A | Condicionales reales, concordancia, presente/futuro y modales | `present-real-conditionals`: 21–26; `real-conditionals`: 21–24 |
| 13 C | Unless, even if, as/so long as, provided/providing that | Ampliación de `conditional-conjunctions`: 21–26 |
| 6, 9, 37, 38 | Cosas molestas: 12 expresiones | `class-vocab-annoying-things`: 24 ejercicios |
| 10, 35 | Desafíos: 14 expresiones | `class-vocab-facing-challenges`: 28 ejercicios |
| 19 A, 23, 28, 29 | Personalidad: 12 expresiones y matices | `class-vocab-personality`: 25 ejercicios |
| 20 D, 32–34 | Sensaciones: 11 palabras, antónimos y connotación | `class-vocab-strong-feelings`: 26 ejercicios |
| 12 B, 13 B, 16, 17 | Emociones: 12 expresiones | `class-vocab-dealing-with-emotions`: 24 ejercicios |
| 7 | Exploración: 10 términos/expresiones | `class-vocab-exploration`: 20 ejercicios |
| 27 | Preparación del listening: 10 términos | `class-vocab-campus-and-social`: 20 ejercicios |

La foto 19 tiene un encabezado de exploración, pero su contenido es de personalidad. Se clasifica por las palabras y ejercicios. El audio de la foto 27 y la lectura de la página 24 mencionada en la foto 33 no están disponibles; no se inventan diálogos, textos ni claves para esas actividades.

## Organización

- `src/content/class-notes/vocabulary.ts`: inventario de las 81 entradas por tema (79 expresiones distintas, con socialize y uneasy repetidos por contexto), definiciones inglesas, significados españoles, oraciones, formas correctas y patrones de uso. Exporta las listas de estudio y genera una pregunta de significado y otra de contexto por entrada. Los ejercicios adicionales de personalidad y sensaciones están en las ampliaciones.
- `src/content/class-notes/grammar.ts`: las dos lecciones nuevas, con 20 ejercicios cada una. Combina huecos, elección, selección múltiple, verdadero/falso, emparejamiento y ordenación.
- `src/content/class-notes/extensions.ts`: añade 59 ejercicios a los temas existentes y al repaso de vocabulario, sin renumerar claves anteriores. También contiene introducciones revisadas sobre hábitos y reducción.
- `src/content/class-notes/corrections.ts`: textos revisados para las preguntas existentes. `src/content/translations/catalog.ts` aplica estos textos de clase después del catálogo anterior para que servidor y seed resuelvan la misma versión.
- `src/content/class-notes/authoring.ts`: constructores tipados; mantiene las traducciones de cada ejercicio junto a su contenido. Las claves de vocabulario usan un identificador permanente por expresión y función (`meaning` o `context`), no su posición en el listado. No se repite la explicación como consejo si no hay uno adicional.
- `src/lib/lesson-kind.ts`: identifica por separado `vocab-chunk-NN` y `class-vocab-*`. Consultas SQL, fixtures, catálogo y retorno desde la práctica usan la misma clasificación. La navegación siguiente permanece dentro de cada familia.

Se añaden 9 lecciones y 261 ejercicios: el registro completo queda en **91 lecciones y 3,125 ejercicios**. El catálogo `/vocabulary` separa los 7 temas de clase de los 40 bloques generales. Los temas de clase practican todos sus ejercicios; los bloques generales conservan sus sesiones rotativas de 6 preguntas, su contador de 2,000 palabras y su navegación. Las tarjetas de clase miden progreso por ejercicios; las generales, por palabras.

## Criterios para editar

1. No cambies identificadores de expresiones, slugs ni claves de ejercicios ya publicados. Añade ejercicios con números nuevos. Una sesión guardada continúa con su orden anterior; al volver a practicar se incluyen las nuevas preguntas.
2. Mantén la distinción entre estado y acción según el significado: have a car y have lunch no se comportan igual. Used to / would no deben confundirse con be/get used to + -ing.
3. En un hueco de respuesta única, no ofrezcas dos alternativas equivalentes como as/so long as o provided/providing that. Si se evalúan ambas, usa selección múltiple y pide explícitamente ambas respuestas.
4. El contexto o la consigna debe determinar la forma. Distingue regret to inform en un anuncio actual de regret informing por una acción anterior; try doing como experimento de try to do como intento; go on doing de go on to do.
5. Mantén cuyo referente posee el sustantivo: whose + noun, junto al antecedente correcto. No confundas omitir un pronombre objeto con reducir una relativa de sujeto.
6. No conviertas rasgos de personalidad ni connotaciones contextuales en reglas universales. Weird y bizarre pueden solaparse; los introvertidos también pueden disfrutar de la compañía.
7. Completa inglés y español en el catálogo compartido. Los idiomas asiáticos conservan el respaldo explícito al inglés cuando falta traducción; no se registran copias inglesas bajo otro idioma.

La forma “She used to be able to dance very well”, marcada con una X en las fotos 8/36, coincide con la [clave del ejercicio original, página 2](https://www.perfect-english-grammar.com/support-files/used_to_exercise_2.pdf). Las reglas de [hábitos pasados](https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/past-habits-used-to-would-past-simple) y [participios](https://learnenglish.britishcouncil.org/grammar/c1-grammar/participle-clauses) se contrastaron con British Council durante la revisión. El [extracto oficial de Evolve 5](https://assets.cambridge.org/97811084/05331/excerpt/9781108405331_excerpt.pdf) contiene el bloque de hábitos presentes, y [Oxford](https://www.oxfordlearnersdictionaries.com/us/definition/english/regret_1) distingue los patrones con regret.

## Comprobación y publicación

Ejecuta `pnpm validate:source`, `pnpm validate:translations`, `pnpm test`, `pnpm typecheck` y `pnpm build`. El recorrido E2E es `pnpm test:e2e`; usa exclusivamente fixtures con `ENGLISH_E2E=1` y no debe habilitarse en producción. Las pruebas específicas están en `scripts/class-notes.test.ts` y `cypress/e2e/catalog-preferences.cy.ts`.

El runtime normal sigue consultando PostgreSQL. Para publicar las nuevas lecciones y respuestas hay que ejecutar el seed normal autorizado contra la base correcta, después de validar el cambio. Ese modo usa upserts y conserva IDs; `db:reset` elimina contenido y reinicia IDs y no es necesario para esta integración. Las traducciones del catálogo tienen prioridad sobre filas antiguas, pero no sustituyen la sincronización de `lessons` y `exercises`.

Consulta de solo lectura realizada el 17 de octubre: la base conectada tiene **66 lecciones publicadas y 784 ejercicios almacenados**. Faltan 25 lecciones del registro fuente: 16 ya existían antes de esta tarea y 9 se añaden ahora. No hay lecciones ajenas al registro ni lecciones del registro marcadas como no publicadas. La consulta funcionó fuera del aislamiento del entorno; no se modificó la base. La publicación requiere coordinar el despliegue del código con la sincronización del contenido, para que las nuevas categorías y respuestas se interpreten con la versión correspondiente.

Validación de esta integración: 41 pruebas Node, validación de ejercicios y traducciones, TypeScript, Astro check, build y comprobación de arranque HTTP aprobados. Los recorridos E2E de los temas nuevos pasan, incluidos progreso tras recarga, clasificación, selección múltiple y ayuda española; en total pasan 10 de 11 recorridos. Permanece un fallo de la prueba existente de preferencias con teclas nativas en Chrome 155: se observaron keydown/keyup de Enter sin activación del botón; con Espacio la apertura funciona pero Escape no cierra el diálogo en ese recorrido automatizado. No se modificó el comportamiento de preferencias ni se eliminaron sus aserciones para ocultar el fallo.
