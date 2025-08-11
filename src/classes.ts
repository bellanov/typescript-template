/**
 * @fileoverview Classes.
 * Example class implementation, with type declarations to the function 
 * properties defined. It resembles plain old JavaScript otherwise.
 */

/**
 * IMPORTANT
 * Class declarations aren't hoisted like usual variable declarations, so they
 * must be declared at the top of the file. Hoisting them manually essentially.
 */

namespace Classes {

  export class Vehicle {
    wheels: number;
    power: number;
    speed: number = 0;

    constructor(wheels: number, power: number) {
      this.wheels = wheels;
      this.power = power;
    }

    // Specify return type
    accelerate(time: number): void {
        this.speed = this.speed + 0.5 * this.power * time;
    }
  }
}

// Import class exported from namespace
const myVehicle: Classes.Vehicle = new Classes.Vehicle(4, 150);
myVehicle.accelerate(10);

// Log to console
console.log(`My vehicle's speed is ${myVehicle.speed} km/h.`);

// Replace content within HTML
document.getElementById("vehicle-speed")!.textContent = `${myVehicle.speed} km/h.`;