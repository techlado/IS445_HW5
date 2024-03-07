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
console.log("An array of student first names:");
console.log(studentFirstNames);

//An array of student last names
const studentLastNames = studentList.map(student => student.lastName);
console.log("An array of student last names:");
console.log(studentLastNames);

//An array of students with a high score of 100
const perfectScorers = studentList.filter(student => {
  const scoreHundred = student.scores.reduce((max, score) => (score > max ? score : max), 0);
  return scoreHundred === 100;
});
console.log("An array of students with a high score of 100:");
console.log(perfectScorers);

//The average total score (sum of points) for the class
const averageClassScore = ((studentList.reduce((acc, student) => acc + student.scores.reduce((sum, score) => sum + score, 0), 0)) / studentList.length).toFixed(3);
console.log("The average total score (sum of points) for the class:");
console.log(averageClassScore);

//Min Scores
const minScores = studentList.map(student => {
  const min = student.scores.reduce((min, score) => (score < min ? score : min), student.scores[0]);
  return min;
});
console.log("The lowest score for each student:");
console.log(minScores);

//Max Scores
const maxScores = studentList.map(student => {
  const max = student.scores.reduce((max, score) => (score > max ? score : max), student.scores[0]);
  return max;
});
console.log("The highest score for each student:");
console.log(maxScores);

//Average Scores
const avgScores = studentList.map(student => {
  const avg = (student.scores.reduce((total, score) => (total + score), 0) / student.scores.length);
  return avg;
});
console.log("The average score for each student:");
console.log(avgScores);



//Declare cLastNameResults.  Use functional programming (filter, map, reduce, and pure functions) to generate a new array of objects (don’t use a traditional loop)
const cLastNameResults = studentList => {
  // const cLNR = [];
  
  //Determine students whose last names start with 'C'
  // const cLastNameStudentsHolder = [];
  // const cStudents = studentList.filter(student => student.lastName.startsWith('C'));
  // cLastNameStudentsHolder.push(cStudents);


  //Class Method
  // class std {
  //   constructor(student) {
  //     this.firstName = student.firstName;
  //     this.lastName = student.lastName;
  //     this.minScore = student.scores.reduce((min, score) => (score < min ? score : min), student.scores[0]);
  //     this.maxScore = student.scores.reduce((max, score) => (score > max ? score : max), student.scores[0]);
  //     this.avgScore = student.scores.reduce((total, score) => (total + score), 0) / student.scores.length;
  //   };
  // };

  // return studentList.filter(student => student.lastName.startsWith('C')).map(student => new std(student)); 


  // return studentList.filter(student => student.lastName.startsWith('C')).map(student => {
  //   student.minScore = student.scores.reduce((min, score) => ((score < min ? score : min), student.scores[0]));
  // });

  return studentList.filter(student => student.lastName.startsWith('C')).map(student => {
    student.minScore = student.scores.reduce((min, score) => (score < min ? score : min), student.scores[0]);
    return student;
  }).map(student => {
    student.maxScore = student.scores.reduce((max, score) => (score > max ? score : max), student.scores[0]);
    return student;
  }).map(student => {
    student.avgScore = student.scores.reduce((total, score) => (total + score), 0) / student.scores.length;
    return student;
  });

  
};

//Output
console.log(cLastNameResults(studentList));
