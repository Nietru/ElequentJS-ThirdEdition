// FUNCTIONS

// A function is created with an expression that starts with the Keyword "function()".
// Functions can have multiple parameters, or none at all.
// No parameters:
const makeNoise = function () {
  console.log("Pling!");
};
makeNoise();
// With parameters:
const power = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 10));
// -> 1024
// A return statement determines the value the function returns.
// When control comes across a return statement, it immediates jumps out of the function to return the value.
// A return keyword without an expression after it (line 15 "result"), will return undefined.
//-----------------------------------------------------------------
// Parameters to a function behave like regular bindings/variables, but their initial values are given by the "caller" of the function,
// not the code inside the function itself.
//----------------------------------------------------------------
// SCOPE
// Global: bindings defined outside of any function or block.
// Local: bindings created for function parameters or declared inside of a function.
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // --> 60
}
// y is not visible here:
// console.log(x + y + z); // y is not defined because let is not global so throws an error in the console.
console.log(x + z);
// --> 40
//---------------------------------------------------------------
// Each Scope can "look out" like ^ the x binding on line 29,
// except when there is another binding with the same name "x" within the function, local scope, as well.
const halve = function (n) {
  return n / 2;
};
let n = 10;
console.log(halve(100));
// --> 50
console.log(n);
// --> 10
//----------------------------------------------------------
// NESTED SCOPE:
// Blocks and functions can be created inside other blocks and functions, creating multiple degrees of locality.
const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    ingredientAmount = Number(ingredientAmount);
    if (ingredientAmount > 1) {
      unit += "s"; // unit becomes plural if there is more than 1.
    }
    console.log(`${ingredientAmount} ${unit} ${name}`); // ingredient function cannot work outside of its local environment.
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
hummus();
// The code inside the ingredient function can see the factor binding from the outer hummus function,
// but its local bindings, such as unit and ingredientAmount, are not visible to the outer function.
// "Lexical Scoping": Each local scope can also see all the local scopes that contain it. And ALL scopes can see the global scope.
//----------------------------------------------------------
// FUNCTIONS AS VALUES:
// A function binding usually just acts as a name for a specific piece of the program and is never changed.
// and this makes it easy to confuse the function and its name.
// A binding that holds a function is still just a regular binding, if not const, and can be assigned a new value:
let launchMissles = function () {
  missileSystem.launch("now");
};
// if(safemode) {
//   launchMissles = function () {
//     /* do nothing */
//   };
// }
//------------------------------------------------------------
// FUNCTION DECLARATIONS (starting with "function()"), dont work top-bottom and can be declared below where they are called:
console.log("The future says:", future());
// and they do not need a semi-colon after the ending curly brace:
function future() {
  return "You'll never have flying cars";
}
// They are conceptually moved to the top of their scope and can be used by all of the code in that scope.
//-------------------------------------------------------------
// ARROW FUNCTIONS: The 3rd notation for functions!
// Uses => instead of the keyword "function".
const powr = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result += base;
  }
  return result;
};
// if there is only 1 parameter, you can ommit the parentesis:
const square1 = (x) => {
  return x * x;
};
// can instead be written like this:
const square2 = (x) => x * x;
// if there are no parameters, we use empty parenthesis:
const horn = () => {
  console.log("Toot");
};
// There really isnt a difference between using arrow functions and function declaration ^ line 92
//--------------------------------------------------------
// THE CALL STACK: control flow of/through functions
// the call to greet causes control to jump to the start of that function(line 122).
function greet(who) {
  // the function calls console log, which takes control, does its job, then it reaches the end of the greet function.
  console.log("Hello " + who);
}
// then control moves the where greet is called on line 125, does its job printing "Hello Harry" to the console.
greet("Harry");
// then console log returns "Bye" and the program ends.
console.log("Bye");
// ^^^^^^:
// not in function
//  in greet function
//    in console.log
//  in greet function
// not in function
//  in console.log
// not in function
// ----- Becasue a function has to jump back to where it was called when it returns, the computer must remember the context from which
//  the call happened. The place where the computer stores this context is called the "Call Stack".
// Storing this stack requires computer memory.
// If the stack gets too large, the computer will fail with a message like: "out of stack space" or "too much recursion".
//-----------------------------------------------------
// OPTIONAL ARGUMENTS:
