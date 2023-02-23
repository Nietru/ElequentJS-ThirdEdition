// CONTROL FLOW:

let theNumber = Number(prompt("Pick A Number"));
// Conditional Execution in js starts with "IF" keyword.
// We want to show the square of the input only IF the input is actually a number:
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
}
// The if keyword executes or skips a statement depending on value of a boolean expression.

// "ELSE" keyword
// You can use the else keyword, together with if keyword, to create two seperate alternative execution paths:
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey! Why didn't you give me a number?");
}

// Chaining multiple "ELSE-IF" pairs together for more than two conditions/paths:
let num = Number(prompt("Pick A Number"));
if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

// WHILE AND DO LOOPS:
// A statement starting with the "WHILE" keyword creates a loop, that keeps looping until it returns a boolean value of false.
// If we want to log all of the even numbers from 0-12 we will use the while loop:
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

// while loop for 2 to the 10th power:5
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result); //1024

// A Do Loop differs from a While Loop in one way, it will always execute one time before testing whether it should stop:
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName); // ! boolean "not" will make it keep asking the prompt until it gets a non-empty string value returned.
console.log(yourName);

// FOR LOOPS:
// a more comprehensive version of the While Loop.
// the parenthesis after the "for" must contain two semicolons:
// the part before first semi-colon initializes the loop, and part before second semicolon check if the loop must continue.
// the final part updates the loop after each iteration:
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// ^ Does the same thing as the while loop on line 33.

// besides a false boolean, you can break out of a loop with the "break" statement:
// because there is nothing that stops the loop (before second semicolon), it will go on forever without the break statement:
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    break;
  }
  console.log(current);
}

// JavaScript has a shortcut for updating a variable/binding:
counter = counter + 1;
// shortcut:
counter += 1;
//or:
counter++; //because it is incrementing by 1, can also do counter--;
for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}

// The "SWITCH" construct replaces the ELSE-IF statement with the "case" statement:
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
    break;
  case "cloudy":
    console.log("Cloudy. Check outside...");
    break;
  default:
    console.log("Unknown weather type!");
    break;
} // a chain of if-statements tends to be preferred because it looks better.
