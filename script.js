// Taking Input from user;
let inputOne = prompt("Enter first number:");
let inputTwo = prompt("Enter second number:");

// Converting inputs to a number;
inputOne = parseInt(inputOne);
inputTwo = parseInt(inputTwo);

// Calculations;
const plus = inputOne + inputTwo;
const minus = inputOne - inputTwo;
const multiply = inputOne * inputTwo;
const division = inputOne / inputTwo;
const modulas = inputOne % inputTwo;

// Output;
document.write("Addition: " + plus + "<br>");
document.write("Subtraction: " + minus + "<br>");
document.write("Multiplication: " + multiply + "<br>");
document.write("Division: " + division + "<br>");
document.write("Remainder: " + modulas);