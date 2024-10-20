//this is input value;
const value = "Happy New Year";

const vowelsChecker = (value) => {
  //key of char in vowels
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (char of value) {
    //check for match
    if (vowels.includes(char)) {
      //increase the count of value
      count++;
    }
  }
  return count;
};

//finally output 
console.log(vowelsChecker(value));
