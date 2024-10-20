const value = "Happy New Year";

const vowelsChecker = (value) => {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (char of value) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

console.log(vowelsChecker(value));
