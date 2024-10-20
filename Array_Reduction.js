const numbers = [12, 3, 4, 5, 12, 5, 2, 0];

const sumOfNumbers = (arr) => {
  return arr.reduce((acc, num) => {
    if (num % 2 === 0) {
      return acc + num;
    }
    return acc;
  }, 0);
};

console.log(sumOfNumbers(numbers));
