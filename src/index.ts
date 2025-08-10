/**
 * @fileoverview Introduction to TypeScript. This example demonstrates basic
 * TypeScript features such as types, interfaces, and functions.
 */

namespace Index {
  export function hello(name: string) {
    console.log(`Hello, ${name}!`);
  }
}

Index.hello("World");
