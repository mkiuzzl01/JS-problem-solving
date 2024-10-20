
const checkLeapYear = (num) => {
  if (num % 4 === 0 && num % 100 !== 0) {
    console.log(num, "Is a Leap Year");
  } else if (num % 400 === 0) {
    console.log("Is a Leap Year");
  } else {
    console.log("Is not Leap Year");
  }
};

checkLeapYear(2024);