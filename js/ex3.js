//Declare studentList Array
const studentList = [
  {
      firstName: "Allan",
      lastName: "Able",
      scores: [95, 85, 92, 98]
  },
  {
      firstName: "Amy",
      lastName: "Alexander",
      scores: [80, 88, 100]
  },
  {
      firstName: "Betty",
      lastName: "Barns",
      scores: [70, 80, 90, 100]
  },
  {
      firstName: "Bob",
      lastName: "Bones",
      scores: [75, 85, 95, 85]
  },
  {
      firstName: "Cindy",
      lastName: "Chase",
      scores: [95, 90, 92, 98]
  },
  {
      firstName: "Charles",
      lastName: "Chips",
      scores: [88, 99, 90]
  },
];
// TO DO - Write higher order functions / There are many solutions

//An array of student first names
const studentFirstNames = studentList.map(student => student.firstName);
console.log(studentFirstNames);

//An array of student last names
const studentLastNames = studentList.map(student => student.lastName);
console.log(studentLastNames);

//An array of students with scores of 100
// const perfectScorers = studentList.filter(student => {
//   const maxScore = student.scores.reduce((max, score) => (score > max ? score : max), 0);
//   return maxScore === 100;
// });
// console.log(perfectScorers);

console.log(perfectScorers);


//The average total score (sum of points) for the class
const averageClassScore = ((studentList.reduce((acc, student) => acc + student.scores.reduce((sum, score) => sum + score, 0), 0)) / studentList.length).toFixed(3);
console.log(averageClassScore);

//Declare cLastNameResults.  Use functional programming (filter, map, reduce, and pure functions) to generate a new array of objects (don’t use a traditional loop)
const cLastNameResults = ["Test test test"];

//Output
console.log(cLastNameResults);
