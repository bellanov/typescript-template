/**
 * @fileoverview Arrays. to TypeScript. This example demonstrates how
 * to work with arrays in TypeScript.
 */

// An array of numbers - Method 1
// Angle brackets - familiar to C# and Java developers
let list1: Array<number> = [1, 2, 3, 4, 5];

// An array of numbers - Method 2
// Square brackets - more common in TypeScript and familiar to developers.
let list2: number[] = [6, 7, 8, 9, 10];

// Push a number to a list
// Appends new elements to the end of an array, and returns the new length 
// of the array.
list1.push(6);

// Pop a number from a list
// Removes the last element from an array and returns that element.
list1.pop();

// Unshift a number to the beginning of a list
// Adds new elements to the beginning of an array and returns the new length
// of the array.
list1.unshift(0);

// Shift a number from the beginning of a list
// Removes the first element from an array and returns that element.
list1.shift();

document.getElementById("array-list-1")!.textContent = list1.toString();
document.getElementById("array-list-2")!.textContent = list2.toString();