import { courseLesson, coursePractice } from './authoring.js';
import { verbs, forms } from './verbs.js';

const p = coursePractice('past-verb-forms');
for (const [i, v] of verbs.entries()) {
  const form = i % 4;
  const labels = ['base (V1)', 'past (V2)', 'past participle (V3)', '-ing'];
  const labelsEs = ['base (V1)', 'pasado (V2)', 'participio pasado (V3)', '-ing'];
  const frame = form === 0 ? `did not ____ (${v[0]})` : form === 1 ? `${v[0]} → ____ (V2)` : form === 2 ? `had ____ (${v[0]})` : `was ____ (${v[0]})`;
  const correct = v[form];
  const spelling = v[0] === 'read' ? ['Past read sounds like red.', 'Read en pasado suena como red.'] :
    v[0] === 'lie' ? ['Here lie means recline: lay/lain/lying; lie meaning say something untrue has lied/lied.', 'Aquí lie es estar tumbado: lay/lain/lying; lie con sentido de mentir tiene lied/lied.'] :
    ['Compare all four forms; matching V2 and V3 is normal for many verbs.', 'Compara las cuatro formas; es normal que V2 y V3 coincidan en muchos verbos.'];
  p.fill(frame, correct,
    [`${forms(v)}. This frame needs ${labels[form]}. ${spelling[0]}`, `${v[0]} = ${v[4]}. ${forms(v)}. Este patrón pide ${labelsEs[form]}. ${spelling[1]}`],
    [`Write the ${labels[form]} form. Only the missing verb, without an auxiliary.`, `Escribe la forma de ${labelsEs[form]}. Solo el verbo que falta, sin auxiliar.`],
    ['base_after_did', 'V2', 'V3_after_had', 'ing_spelling'][form]!, i < 12 ? [...new Set([v[0], v[1], v[2], v[3]])] : []);
}
export const workshopLesson = courseLesson('past-verb-forms', [
  '## Four forms, four different jobs\n\n- **Base / V1:** go, write, take. Use after did, did not and modal verbs: Did she go? She can write.\n- **Past / V2:** went, wrote, took. Use in affirmative simple past.\n- **Past participle / V3:** gone, written, taken. Use after had in past perfect.\n- **-ing:** going, writing, taking. Use after was/were or had been in continuous forms.\n\n**Same verb:** I wrote → I did not write → I was writing → I had written → I had been writing.\n\n**Families:** cut/cut/cut; buy/bought/bought; sing/sang/sung; go/went/gone; see/saw/seen; do/did/done; have/had/had.\n\n**Spelling:** study/studied/studying (y stays before -ing); plan/planned/planning (double n); make/made/making (drop final e for -ing); lie/lay/lain/lying (recline).\n\nThese 40 short tasks alternate the required form so that you must read the auxiliary. The first 12 have choices; the rest require recall. After feedback, say the full four-form chain aloud.',
  '## Cuatro formas, cuatro funciones\n\n- **Base / V1:** go, write, take. Después de did, did not y los modales: Did she go? She can write.\n- **Pasado / V2:** went, wrote, took. Para la afirmativa del pasado simple.\n- **Participio pasado / V3:** gone, written, taken. Después de had en pasado perfecto.\n- **-ing:** going, writing, taking. Después de was/were o had been en los continuos.\n\n**El mismo verbo:** I wrote → I did not write → I was writing → I had written → I had been writing.\n\n**Familias:** cut/cut/cut; buy/bought/bought; sing/sang/sung; go/went/gone; see/saw/seen; do/did/done; have/had/had.\n\n**Ortografía:** study/studied/studying (y se conserva antes de -ing); plan/planned/planning (duplica n); make/made/making (quita e final ante -ing); lie/lay/lain/lying (estar tumbado).\n\nEstos 40 ejercicios alternan la forma requerida para obligarte a leer el auxiliar. Los primeros 12 tienen opciones; el resto exige recordar. Tras ver la explicación, di en voz alta la cadena de cuatro formas.',
], p.exercises);
