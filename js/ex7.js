let userInput = prompt("Please enter a number: ");
let num1 = Number.parseInt(userInput);

userInput = prompt("Please enter a number: ");
let num2 = Number.parseInt(userInput);

if (isNaN(num1) || isNaN(num2)) {
  document.getElementById("content").innerHTML = '<span style="color:red; font-weight:bold;">Error: Invalid input</span>';
} else {
  var sum = num1 + num2;
  document.getElementById("content").innerHTML = 'Sum of ' + num1 + ' and ' + num2 + ' is: <span style="color:red; font-weight:bold;">' + sum + '</span>';
}

console.log("test");