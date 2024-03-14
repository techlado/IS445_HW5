let userInput = prompt("Please enter a number between 1 and 100: ");

let number = Number.parseInt(userInput);

if (!Number.isNaN(number) && Number.isInteger(number) >= 1 && number <= 100)
{
  console.log("Thank you! You entered " + number + ", a valid number.")
} else {
  console.log("Sorry, " + userInput + " is not a valid entry.")
}