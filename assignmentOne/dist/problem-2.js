"use strict";
const removeDuplicates = (numbers) => {
    const newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        if (!newArray.includes(numbers[i])) {
            newArray.push(numbers[i]);
        }
    }
    return newArray;
};
