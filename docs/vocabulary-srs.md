# Vocabulario de 5,000 palabras y repetición espaciada

## Experiencia y alcance

`/vocabulary` contiene el mazo general NGSL-GR con 5,000 palabras base únicas. Los antiguos 40 bloques ya no son la experiencia de estudio; sus módulos permanecen como archivo de compatibilidad y para interpretar claves antiguas. Los siete temas de clase y las lecciones gramaticales conservan su ejecutor de ejercicios.

La sesión muestra una pregunta, oculta la respuesta y permite valorar el recuerdo mediante Otra vez / Difícil / Bien / Fácil. Difícil es un recuerdo correcto. Los intervalos visibles los calcula `ts-fsrs` 5.4.2, fijado exactamente para identificar el algoritmo del historial.

- Nuevas: 10 tarjetas diarias por defecto, configurables entre 0 y 100.
- Retención objetivo: 90% por defecto, ajustable entre 70% y 97%. Es un objetivo del modelo.
- Aprendizaje: pasos de 1 y 10 minutos; reaprendizaje: 10 minutos.
- Aprendizaje vencido tiene prioridad; después se presentan repasos vencidos y nuevas por orden de fuente.
- Reconocimiento inglés → significado activado inicialmente. Producción opcional, con horario independiente y la misma cuota global de nuevas. La nueva dirección de una palabra no se introduce el mismo día que su hermana.
- Día de estudio: comienza a las 04:00 en la zona horaria guardada; ambos valores son configurables. El cálculo conserva el día de calendario durante cambios de horario estacional.
- Las tarjetas hermanas nuevas/en repaso se ocultan hasta el siguiente día de estudio. Los pasos de aprendizaje ya iniciados continúan.
- Suspender conserva memoria e historial; ocultar por hoy es temporal. Las marcas permiten localizar tarjetas para reformularlas o repasarlas.
- Deshacer revierte una valoración, su cuota y sus puntos de forma conjunta. Rechaza sobrescribir cambios posteriores de otras pestañas.
- Los puntos de tarjetas son independientes del total histórico de ejercicios: cinco por palabra y día, con cualquier valoración. El sistema no premia más elegir Fácil ni duplica puntos por repetir una palabra.
- Las teclas Espacio/Enter revelan; al revelar, 1–4 valoran y Espacio/Enter eligen Bien. En el campo de escritura, Enter solo revela. Las pulsaciones mantenidas se ignoran.
- El repaso libre usa la selección o filtros de biblioteca sin alterar programación, historial o puntos.

No se usa la barra antigua de «dominadas» para medir memoria. Las estadísticas distinguen palabras introducidas, direcciones, repasos, previsión y recuerdo observado. Este último usa el primer repaso programado de cada tarjeta por día en los últimos 30 días y se muestra con al menos diez observaciones. No incluye respuestas nuevas ni aprendizaje inicial.

## Catálogo y procedencia

El CSV oficial NGSL-GR 1.0 descargado contiene **5,050** entradas únicas: 50 elementos suplementarios iniciales de calendario/números y 5,000 entradas del listado principal. El mazo utiliza **WordID 51–5050**, conservando el orden original. `rank` es posición dentro de esta selección; no se presenta como un ranking universal medido de todo el inglés.

- Selección: [NGSL-GR, Browne y Culligan](https://www.newgeneralservicelist.com/ngsl-graded-reader), CC BY-SA 4.0.
- Definiciones y traducciones: glosas editoriales del proyecto y [FreeDict + WikDict English–Spanish 2025.11.23](https://download.freedict.org/dictionaries/eng-spa/2025.11.23/), Karl Bartel y colaboradores de Wiktionary mediante DBnary, CC BY-SA 3.0. Las adaptaciones del catálogo se distribuyen bajo CC BY-SA 4.0.
- Ejemplos: [ManyThings](https://www.manythings.org/anki/) y pares directamente enlazados del archivo oficial de [Tatoeba](https://tatoeba.org/), CC BY 2.0 FR. Cada ejemplo conserva identificadores y autores. Hay ejemplos complementarios originales en `examples.tsv` con licencia CC BY-SA 4.0.
- Los ejemplos ilustran uso; pueden mostrar otra acepción. El objetivo de producción es la acepción indicada en el frente, no una evaluación automática de una traducción única. Las alternativas se consultan en el reverso.
- Audio por Web Speech API; no se descarga audio ajeno. Depende de las voces y capacidades del dispositivo.

No se infieren transcripciones fonéticas ni niveles CEFR que las fuentes no verifiquen. Las validaciones comprueban integridad, correspondencia, campos y cobertura; no certifican la ausencia de errores lingüísticos en corpus externos. Las correcciones editoriales deben mantener juntos significado, definición y ejemplo para evitar confundir acepciones.

Archivos:

| Archivo | Responsabilidad |
|---|---|
| `sources/NGSL-GR_rank.csv` | Copia exacta de la selección oficial, con SHA-256 en manifest |
| `ngsl-gr.json` | Catálogo final, generado y disponible durante el build sin red |
| `editorial.tsv`, `editorial.json` | Correcciones de significado, categoría y definición |
| `examples.tsv` | Ejemplos bilingües originales, especialmente para huecos del corpus |
| `legacy-map.json` | Clave de pregunta antigua → identificador de palabra |
| `manifest.json` | Versión, selección y huellas de las fuentes descargadas |

No edites manualmente `ngsl-gr.json`. Ajusta los archivos editoriales y regenera. Los identificadores `ngslgr-<palabra-en-minúsculas>` no dependen de la posición; cambiar un identificador requiere migración. Una palabra con varias categorías sigue contando una vez. El reverso muestra acepciones adicionales sin introducirlas automáticamente como tarjetas nuevas.

El CSV conserva el BOM UTF-8 y los finales de línea originales. `.gitattributes` impide que Git normalice esos bytes: su huella debe coincidir también al compilar en Linux.

## Motor y persistencia

- `src/lib/vocabulary/scheduler.ts`: FSRS, cola, límites, hermanas y reloj de estudio.
- `src/lib/vocabulary/store.ts`: IndexedDB mediante `idb`; almacenes `cards`, `reviews` y `meta`.
- `src/lib/vocabulary/content.ts`: contratos y validación del catálogo.
- `src/components/vocabulary/VocabularyApp.tsx`: inicio, estudio, biblioteca paginada, ajustes y estadísticas.
- `src/content/translations/vocabulary-srs.ts`: etiquetas inglesas/españolas incorporadas al catálogo compartido. La página las resuelve mediante `translate.ts`; otros idiomas reciben instrucciones inglesas con aviso explícito.
- `/api/vocabulary/catalog`: catálogo público versionado, sin consultar PostgreSQL. El contenido de clase mantiene sus APIs anteriores.

Cada valoración comprueba revisión de tarjeta, disponibilidad y cuota dentro de una transacción, guarda el nuevo estado, agrega un registro con identificador de operación y actualiza contadores. Doble envío de la misma operación es idempotente. Una pestaña atrasada no puede sobrescribir otra valoración. BroadcastChannel actualiza las demás pestañas.

El registro conserva valoración, fecha real, versión de algoritmo, retención utilizada, estado anterior/posterior y cambios de hermana. Deshacer deja el registro marcado como revertido; las estadísticas lo excluyen. Los cambios de ajustes afectan a futuros repasos sin recalendario masivo. El ajuste automático de parámetros personales queda para una ampliación con suficiente historial.

El progreso es **local a este navegador y origen**. No hay cuenta ni sincronización automática con otros dispositivos o AnkiWeb. Exportar/restaurar JSON permite trasladarlo. El CSV exporta contenido, sin prometer compatibilidad del calendario con `.apkg`.

## Continuidad y copias

En la primera carga se archivan las claves antiguas de progreso, rondas y puntos de `vocab-chunk-*` sin borrarlas. Las preguntas reconocidas se relacionan con palabras del catálogo como exposición anterior; esto puede priorizar nuevas palabras, pero nunca fabrica un historial FSRS ni cientos de repasos vencidos.

Las respuestas con identificadores numéricos desconocidos y los registros dañados permanecen en la copia original. El archivo incluye el historial de vocabulario anterior, no todos los datos de gramática o preferencias globales de la aplicación. Las URL antiguas redirigen a una colección de sus palabras aún presentes en el nuevo catálogo, con opción de limpiar ese filtro.

La copia JSON es versionada, valida identificadores y fechas y conserva ajustes, tarjetas, valoraciones y archivo antiguo. Restaurar presenta el número de tarjetas y repasos, exige confirmación en la interfaz y descarga primero una copia de seguridad. Reemplaza únicamente el dominio de flashcards en una transacción; nunca borra el progreso de lecciones. Se limita a 100 MB, 10,000 tarjetas y 300,000 registros para impedir importaciones descontroladas. Un fallo de guardado mantiene la tarjeta visible y avisa al estudiante.

## Uso sin conexión

`public/vocabulary-sw.js` conserva la interfaz de vocabulario, sus fuentes de datos y assets con hash. Solo intercepta HTML de vocabulario, su API de catálogo y assets estáticos; no altera las APIs de lecciones ni el resto de páginas.

La interfaz anuncia «Mazo descargado» cuando el trabajador confirma la caché. Después puede recargarse y valorar tarjetas con el servidor apagado. No requiere que las voces de audio estén disponibles sin conexión. Un despliegue que cambie el contenido debe actualizar la versión de caché y de la solicitud del catálogo; las sesiones cargadas conservan su contenido hasta recargar.

## Mantenimiento y comprobación

```sh
pnpm validate:vocabulary
pnpm test:vocabulary
pnpm test
pnpm typecheck
pnpm build
pnpm test:e2e
```

El build valida las 5,000 entradas, unicidad, definiciones, significados, ejemplos, correspondencia exacta con el CSV, SHA-256 y cobertura de etiquetas. La verificación de arranque también consulta el catálogo y la página sin credenciales de PostgreSQL.

Para regenerar, se necesita Python 3 con biblioteca estándar. Los archivos descargados se guardan en `scripts/.vocabulary-cache/` y se excluyen de Git. La aplicación no necesita Python para arrancar ni compilar el catálogo ya incluido.

```sh
node --import tsx scripts/fetch-vocabulary.ts
python scripts/build-vocabulary.py
pnpm validate:vocabulary
```

Las exportaciones públicas de Tatoeba cambian. `fetch-vocabulary.ts` exige las huellas del snapshot: si ya no coincide una descarga, conserva el catálogo publicado y revisa una nueva versión de contenido antes de aceptar el cambio. El CSV y el resultado final del snapshot permanecen en el repositorio.

Editar o publicar las flashcards no requiere seed/reset de PostgreSQL. Sincronizar las lecciones de clase o gramática sigue siendo una operación separada sobre la base seleccionada. El despliegue remoto no forma parte de las comprobaciones locales.
