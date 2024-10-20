const cars = [
  { make: "this is car one", model: "343A", year: 2017 },
  { make: "this is car two", model: "343B", year: 2018 },
  { make: "this is car three", model: "343C", year: 2019 },
  { make: "this is car four", model: "343D", year: 2013 },
];

const sortFunc = (arr) => {
  //descending
  const sort = arr.sort((a, b) => b.year - a.year);
  return sort;
};

console.log(sortFunc(cars));

