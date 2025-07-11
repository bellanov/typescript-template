// Index
// This file is part of a TypeScript template project.
// It demonstrates basic TypeScript features and serves as an entry point for the application.

// The code below defines a namespace with a greeting message and a function to say hello.
// It showcases TypeScript's type system and module organization.

namespace Index {
  export const greeting: string = "Hello from namespace!";

  export function sayHello(name: string): string {
    return `${greeting} Hi, ${name}!`;
  }
}

// Usage
console.log(Index.sayHello("TypeScript"));
