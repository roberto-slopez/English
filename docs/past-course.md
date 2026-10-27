# Pasados, formas verbales y conversación

Actualización del 27 de octubre de 2026. Nueve lecciones con **460 ejercicios nuevos**, en inglés y español. El registro completo queda en **95 lecciones y 3,477 ejercicios**, incluidos los bloques históricos de vocabulario.

## Recorrido

| Paso | Lección / slug | Ejercicios |
|---|---|---:|
| 1 | Taller de verbos — `past-verb-forms` | 40 |
| 2 | Pasado simple — `simple-past-practice` | 60 |
| 3 | Pasado continuo — `past-continuous-practice` | 60 |
| 4 | Pasado perfecto — `past-perfect-practice` | 60 |
| 5 | Pasado perfecto continuo — `past-perfect-continuous-practice` | 60 |
| 6 | Mezcla de pasados — `past-tenses-mixed` | 60 |
| 7 | Modales cotidianos — `everyday-modals` | 40 |
| 8 | Contar conversaciones — `everyday-reporting` | 40 |
| 9 | Suposiciones y respuestas — `assumptions-and-responses` | 40 |

Se eligieron **60 por tiempo** como carga inicial: 20 ejercicios de forma verbal, 10 afirmativas, 10 negativas, 10 preguntas y 10 aplicaciones/correcciones. Cuarenta dejan menos espacio para practicar por separado todos esos aspectos; 80 desde el principio añadirían volumen antes de saber qué errores persisten. No se afirma que un número fijo garantice aprender. La guía propone tandas de 10–15, repetir en días distintos, repasar errores y una meta orientativa de 90% en dos intentos separados. Si todavía hay errores, conviene añadir práctica dirigida al patrón que falla.

El banco común contiene 40 verbos con V1, V2, V3, -ing, significado español, sujeto y complemento explícitos. Las aplicaciones añaden otros verbos frecuentes, como go, see, have, know, lose, find y leave. No se deducen irregularidades mediante reglas automáticas. Hay familias V1=V2=V3, V2=V3 y tres formas distintas, además de cambios ortográficos en -ed/-ing. Las negativas y preguntas ejercitan auxiliares completos; las respuestas cortas y be tienen tratamiento propio.

Los primeros diez ejercicios de cada tiempo tienen opciones; los diez siguientes exigen recordar. Las tareas escritas negativas piden expresamente formas completas porque el validador compara una única respuesta y no expande contracciones. Las preguntas aclaran cuándo el sujeto forma parte del hueco. Cada hueco exige una sola respuesta contigua.

La mezcla alterna enfoques (20 elecciones y 20 respuestas escritas) y termina con 20 huecos de cinco historias originales: viaje, cena, empleo, reencuentro y bolso perdido. Cada pregunta conserva contexto suficiente para funcionar al barajar. Si varios tiempos serían gramaticales, la consigna especifica el enfoque requerido; no se presenta una preferencia editorial como única gramática posible.

## Correspondencia con las cuatro capturas

1. **Pizarra de cuatro pasados:** se desarrollan las cuatro estructuras. Se corrige la simplificación sobre el perfecto continuo: actividad/duración anterior a un momento pasado, sin necesidad de interrupción. El simple no se limita a regulares en -ed.
2. **Conversación del alquiler:** 40 ejercicios de claim, confirm, estimate, explain, insist, say, swear y tell; formas irregulares, patrones, cambio de tiempo, pronombres, preguntas e instrucciones indirectas. Las situaciones son nuevas, inspiradas en la captura.
3. **Making / Contradicting / Clarifying assumptions:** 40 ejercicios que incluyen todas las expresiones legibles. Up to a point, in a way y to an extent se explican como acuerdos parciales; no como preguntas de aclaración. Las respuestas equivalentes se evalúan mediante selección múltiple explícita. Se incluye must have + V3 y su contraste con obligación pasada.
4. **Hoja de past perfect sobre gemelas:** inspira el formato con verbo entre paréntesis, huecos, afirmativas/negativas y secuencia narrativa; no se copian las diez oraciones del libro ni se consideran las anotaciones una clave de respuestas.

Referencias gramaticales: [British Council: tiempos pasados](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/past-tense), [pasado perfecto](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/past-perfect), [deducciones pasadas](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-deductions-about-past) y [Cambridge: estilo indirecto](https://dictionary.cambridge.org/grammar/british-grammar/reporting-clauses).

## Integración y compatibilidad

Las fuentes están en `src/content/past-course/`; usan los constructores bilingües existentes. `src/content/lessons.ts` inserta el curso después de las tres primeras lecciones y asigna orden consecutivo. El catálogo compartido importa el curso también cuando se carga sin el registro.

Se retiran del recorrido `did-and-was`, `simple-past-and-past-continuous`, `past-perfect`, `modal-verbs` y `reported-speech` (108 ejercicios antiguos). `src/lib/lesson-replacements.ts` declara sus sucesores; las URLs antiguas redirigen con 302. Los archivos anteriores, traducciones y claves de progreso se conservan como archivo; no están registrados como lecciones activas ni se transfiere su dominio a preguntas nuevas.

El seed normal usa upserts y despublica **solo** los predecesores cuyo sucesor se haya incluido en la misma transacción. No borra ejercicios, IDs ni contenido ajeno al mapa. Un seed parcial no despublica las demás lecciones. No requiere reset. Hay que sincronizar la base correcta y desplegar el código coordinadamente: el runtime de producción sigue leyendo PostgreSQL; los fixtures de prueba no publican contenido.

## Verificación

`scripts/past-course.test.ts` comprueba cantidades, traducciones, huecos únicos, respuestas con auxiliares/V2/V3/-ing, sinónimos con selección múltiple, separación del progreso, catálogo y retiro acotado durante seed simulado. Ejecutar las validaciones fuente/traducciones, la suite Node, tipos, build con comprobación de arranque y el recorrido E2E existente. No habilitar `ENGLISH_E2E=1` en producción.
