//create an array there have some duplicate values;
const values = [12, 44, 233, 12, 33, 44, 54, 54, 233];

function duplicateValue(values) {
  let uniqueValue = [];

  //for continue first index of array;
  for (let i = 0; i < values.length - 1; i++) {
    //for continue second index of array
    for (let j = i + 1; j < values.length; j++) {
        //check the equal value of array;
      if (values[i] === values[i]) {
        //check the already have an value unique array;
        if (!uniqueValue.includes(values[i])) {
            //the push the unique value
          uniqueValue.push(values[i]);
        }
        
        break;
      }
    }
  }
  return uniqueValue;
}

console.log(duplicateValue(values));
