"use strict";
const countWordOccurrences = (sentence, word) => {
    const words = sentence.toLowerCase().split(" ");
    const wordToCount = word.toLowerCase();
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === wordToCount) {
            count++;
        }
    }
    return count;
};
