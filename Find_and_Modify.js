const person = [
  { name: "MD Khairul Islam", Age: 24, Location: "Vatara" },
  { name: "MD Kamal Hossam", Age: 22, Location: "SayidNogor" },
  { name: "MD Islam", Age: 54, Location: "Labujilbunia" },
  { name: "MD Kabir Hossain", Age: 24, Location: "Uttara" },
];

const findPerson = (arr)=>{
    const result = arr.find(person => person.name ==="MD Islam");
    result.name = 'Uzzal';
    
    return result;
}

console.log(findPerson(person));