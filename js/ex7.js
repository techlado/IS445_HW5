let userInput1 = prompt("Please enter a number: ");
let num1 = parseInt(userInput1);

userInput2 = prompt("Please enter a number: ");
let num2 = parseInt(userInput2);

if (isNaN(num1) || isNaN(num2) || !Number.isInteger(num1) || !Number.isInteger(num2)) {
  document.getElementById("content").innerHTML = '<span style="color:red; font-weight:bold;">' + 'Error!' + '</span>';
  
  document.getElementById("content").innerHTML += '<span>' + ' You must enter integers. You entered "' + userInput1 + '" and "' + userInput2 + '". Try again.' + '</span>';
  
} 
else {
  let sum = num1 + num2;
  document.getElementById("content").innerHTML = 'Sum of ' + num1 + ' and ' + num2 + ' is: <span style="color:red; font-weight:bold;">' + sum + '</span>';
}

console.log("test");