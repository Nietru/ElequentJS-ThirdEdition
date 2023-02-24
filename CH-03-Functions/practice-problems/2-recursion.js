// Recursion
// We have seen that % remainder operator can be used with 2 to see if a number is even or odd.
// Another way to define whether a positive whole nubmer is even or odd is:
// zero is even
// one is odd
// for any other number N, its evenness is the same as N - 2.
// Define a recursive function 'isEven' corresponding to this description, with a single parameter. (a positive whole number).
// Test it out on 50 and 75 and see how it behaves on -1. Why? Can you think of a way to fix this?
// Hint: reference ch.3 pg 51 example (findSolution).
function oddOrEven(num) {
  if (num == 0) return "even";
  if (num == 1) return "odd";
  if (num < 0) return "??";
  else return oddOrEven(num - 2); // recursive step... num's evenness is the same as num - 2.
}
console.log(oddOrEven(50));
console.log(oddOrEven(75));
console.log(oddOrEven(-1));
