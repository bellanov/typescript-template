/**
 * @fileoverview Introduction to TypeScript. This example demonstrates basic
 * TypeScript features such as types, interfaces, and functions.
 */

// Initial variable using `const`
const myString: string = "Hello, TypeScript!";

// Initial variable using `let`
let myNumber: number = 43;

// Displaying the variables
console.log(myString);
console.log(myNumber);

// Example of using TypeScript in the browser
document.getElementById("number")!.textContent = myNumber.toString();
document.getElementById("string")!.textContent = myString;
