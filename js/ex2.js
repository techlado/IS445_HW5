let myArray = [1,2,3,4,5,6,7,8,9,10];

//An array of odd numbers
const myOddArray = myArray.filter(x => x % 2 === 1);
console.log(`An array of odd numbers: [${myOddArray}]`);

//An array of numbers divisible by 2 or 5
const twoFiveArray = myArray.filter(x => x % 2 === 0 || x % 5 === 0);
console.log(`An array of numbers divisible by 2 or 5: [${twoFiveArray}]`);

//An array of numbers divisible by 3, squared
const divThreeSquared = myArray.filter(x => x % 3 === 0).map(x => x ** 2);
console.log(`An array of numbers divisible by 3, squared: [${divThreeSquared}]`);

//The sum of the following: square the numbers diviible by 5
const sumDivFiveSquared = myArray.filter(x => x % 5 === 0).map(x => x ** 2).reduce((acc, value) => acc + value, 0);
console.log(`The sum of the following - square the numbers divisible by 5: [${sumDivFiveSquared}]`);