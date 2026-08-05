/**
 * Fisher-Yates array shuffling utilities for exercise option randomization.
 */

function hashString(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
  }
  return hash >>> 0;
}

function createPRNG(seed: number) {
  let s = seed | 0;
  return function () {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

export function shuffleArray<T>(array: T[], seed?: string | number): T[] {
  if (array.length <= 1) return [...array];
  const seedNum =
    typeof seed === 'number'
      ? seed
      : typeof seed === 'string'
      ? hashString(seed)
      : hashString(JSON.stringify(array));

  const random = createPRNG(seedNum);
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Shuffles choices for single-answer MultipleChoice while preserving the original correct index.
 */
export function shuffleMultipleChoice(
  choices: string[],
  correctIndex: number,
  seed?: string | number
): { shuffledChoices: string[]; newCorrectIndex: number } {
  if (!choices || choices.length === 0) {
    return { shuffledChoices: choices, newCorrectIndex: correctIndex };
  }

  const indexed = choices.map((choice, originalIndex) => ({
    choice,
    originalIndex,
  }));

  const shuffled = shuffleArray(indexed, seed);
  const shuffledChoices = shuffled.map((item) => item.choice);
  const newCorrectIndex = shuffled.findIndex((item) => item.originalIndex === correctIndex);

  return {
    shuffledChoices,
    newCorrectIndex: newCorrectIndex !== -1 ? newCorrectIndex : correctIndex,
  };
}

/**
 * Shuffles choices for multi-answer MultipleChoice while updating all correct indices.
 */
export function shuffleMultipleChoiceMulti(
  choices: string[],
  correctIndices: number[],
  seed?: string | number
): { shuffledChoices: string[]; newCorrectIndices: number[] } {
  if (!choices || choices.length === 0) {
    return { shuffledChoices: choices, newCorrectIndices: correctIndices };
  }

  const indexed = choices.map((choice, originalIndex) => ({
    choice,
    originalIndex,
  }));

  const shuffled = shuffleArray(indexed, seed);
  const shuffledChoices = shuffled.map((item) => item.choice);
  const correctSet = new Set(correctIndices);

  const newCorrectIndices = shuffled
    .map((item, newIndex) => (correctSet.has(item.originalIndex) ? newIndex : null))
    .filter((idx): idx is number => idx !== null);

  return {
    shuffledChoices,
    newCorrectIndices,
  };
}

/**
 * Shuffles left and right columns for Matching exercises while keeping pairs intact.
 */
export function shuffleMatching(
  left: string[],
  right: string[],
  pairs: { leftIndex: number; rightIndex: number }[],
  seed?: string | number
): {
  shuffledLeft: string[];
  shuffledRight: string[];
  newPairs: { leftIndex: number; rightIndex: number }[];
} {
  const leftIndexed = left.map((text, oldIdx) => ({ text, oldIdx }));
  const rightIndexed = right.map((text, oldIdx) => ({ text, oldIdx }));

  const leftSeed = seed != null ? `${seed}-left` : undefined;
  const rightSeed = seed != null ? `${seed}-right` : undefined;

  const shuffledLeftIndexed = shuffleArray(leftIndexed, leftSeed);
  const shuffledRightIndexed = shuffleArray(rightIndexed, rightSeed);

  const oldToNewLeft = new Map<number, number>();
  shuffledLeftIndexed.forEach((item, newIdx) => oldToNewLeft.set(item.oldIdx, newIdx));

  const oldToNewRight = new Map<number, number>();
  shuffledRightIndexed.forEach((item, newIdx) => oldToNewRight.set(item.oldIdx, newIdx));

  const newPairs = pairs.map((pair) => ({
    leftIndex: oldToNewLeft.get(pair.leftIndex) ?? pair.leftIndex,
    rightIndex: oldToNewRight.get(pair.rightIndex) ?? pair.rightIndex,
  }));

  return {
    shuffledLeft: shuffledLeftIndexed.map((item) => item.text),
    shuffledRight: shuffledRightIndexed.map((item) => item.text),
    newPairs,
  };
}

