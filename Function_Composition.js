// for square calculation

function square(num) {
  const square = num * 2;
  return square;
}
// console.log(square(5));

//for double
function double(num) {
  const double = num * num;
  return double;
}
// console.log(double(3));

// for addition

function add(num) {
  const add = num + 5;
  return add;
}
// console.log(add(5));

//for add new function
function calculation(num) {
  const squared = square(num);
  const doubled = double(squared);
  const result = add(doubled);
  return result;
}
console.log(calculation(5));
