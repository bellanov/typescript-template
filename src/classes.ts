/**
 * @fileoverview Classes. This example demonstrates basic
 * TypeScript features such as classes, inheritance, and interfaces.
 */

namespace Classes {
  // Initial variable using `const`
  export const myString: string = "Hello, TypeScript!";

  // Initial variable using `let`
  export let myNumber: number = 43;

  // An array of numbers - Method 1
  // Angle brackets - familiar to C# and Java developers
  export let list1: Array<number> = [1, 2, 3, 4, 5];

  // An array of numbers - Method 2
  // Square brackets - more common in TypeScript and familiar to developers.
  export let list2: number[] = [6, 7, 8, 9, 10];
}

// Displaying the variables
console.log("Number: " + Classes.myNumber);
console.log("String: " + Classes.myString);

// Example of using TypeScript in the browser
document.getElementById("classes-number")!.textContent = Classes.myNumber.toString();
document.getElementById("classes-string")!.textContent = Classes.myString;
