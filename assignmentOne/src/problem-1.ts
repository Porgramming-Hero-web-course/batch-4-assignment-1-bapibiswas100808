const sumArray = (numbers: number[]): number => {
  let sum = 0;
  for (let i: number = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
