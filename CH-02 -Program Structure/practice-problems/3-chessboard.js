// Write a program that creates a string that represents an 8x8 grid, using new-line characters ("/n") to separate lines.
// At each position of the grid, there is either a "#" or a space character. These two characters should form a chessboard.
// Pass the string to console.log to make it look like the image on pg. 38:
/* After making the program to generate this grid, define a binding/variable size = 8 and change the program so it works for any size, 
    outputting a grid of the given width and height. */

let grid = ""; // empty string to add "#" or a space to.
let size = 8; // variable setting
// in the outer loop we add newline to seperate rows.
for (let i = 0; i < size; i++) {
  // every inner loop represents a line and alternate adding a "#" or a " " character to string.
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) grid += " ";
    else grid += "#";
  }
  grid += "\n";
}
console.log(grid);
size = 30; // this part does not work for any size.
console.log(grid);

//
//
//
// another way to solve this from the chapter material:
var chessBoard = "";
var volume = 8;

for (var lineCounter = 1; lineCounter < volume; lineCounter++) {
  if (lineCounter % 2 === 0) {
    //if lineCounter is an even number
    for (var charCounter = 1; charCounter < volume; charCounter++) {
      var evenOdd = charCounter % 2 === 0;
      switch (evenOdd) {
        case true:
          chessBoard += "#";
          break;
        case false:
          chessBoard += " ";
          break;
      }
    }
  } else {
    //if lineCounter is an odd number
    for (var charCounter = 1; charCounter < volume; charCounter++) {
      var evenOdd = charCounter % 2 === 0;
      switch (evenOdd) {
        case true:
          chessBoard += " ";
          break;
        case false:
          chessBoard += "#";
          break;
      }
    }
  }
  chessBoard += "\n";

  volume = 40;
}
console.log(chessBoard);
