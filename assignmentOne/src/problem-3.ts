const countWordOccurrences = (sentence: string, word: string): number => {
  const words: string[] = sentence.toLowerCase().split(" ");
  const wordToCount: string = word.toLowerCase();
  let count: number = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === wordToCount) {
      count++;
    }
  }
  return count;
};
