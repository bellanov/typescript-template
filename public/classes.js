"use strict";
/**
 * @fileoverview Classes. This example demonstrates basic
 * TypeScript features such as classes, inheritance, and interfaces.
 */
var Classes;
(function (Classes) {
    // Initial variable using `const`
    Classes.myString = "Hello, TypeScript!";
    // Initial variable using `let`
    Classes.myNumber = 43;
    // An array of numbers - Method 1
    // Angle brackets - familiar to C# and Java developers
    Classes.list1 = [1, 2, 3, 4, 5];
    // An array of numbers - Method 2
    // Square brackets - more common in TypeScript and familiar to developers.
    Classes.list2 = [6, 7, 8, 9, 10];
})(Classes || (Classes = {}));
// Displaying the variables
console.log("Number: " + Classes.myNumber);
console.log("String: " + Classes.myString);
// Example of using TypeScript in the browser
document.getElementById("classes-number").textContent = Classes.myNumber.toString();
document.getElementById("classes-string").textContent = Classes.myString;
