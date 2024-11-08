const removeDuplicates = (numbers: number[]): number[] => {
  const newArray: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!newArray.includes(numbers[i])) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
};
