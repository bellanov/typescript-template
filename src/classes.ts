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

class Car extends Classes.Vehicle {
  gps: boolean;

  constructor(wheels: number, power: number, gps: boolean) {
    // Be sure to call the parent's constructor
    // Default values are undefined until you call the superclass constructor.
    super(wheels, power);
    this.gps = gps;
  }
}

// Replace content within HTML
document.getElementById("vehicle-speed")!.textContent =
  `${myVehicle.speed} km/h.`;

const myCar: Car = new Car(4, 150, true);
console.log(`My car's GPS is ${myCar.gps ? "enabled" : "disabled"}.`);

myCar.accelerate(10);

document.getElementById("child-vehicle-speed")!.textContent =
  `${myCar.speed} km/h.`;
document.getElementById("child-gps")!.textContent =
  `${myCar.gps ? "enabled" : "disabled"}`;
