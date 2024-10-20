const person = [
  {
    name: "Rahim",
    age: 23,
    gender: "male",
  },
  {
    name: "Karim",
    age: 20,
    gender: "female",
  },
  {
    name: "Selim",
    age: 27,
    gender: "female",
  },
];

const AllFemale = (arr) => {
  const female = arr.filter((female) => female.gender === "female");
  return female;
};
const newArray = AllFemale(person);

for (const person of newArray) {
  console.log(person);
}
