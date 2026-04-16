"use strict";
// Exercise 4: Create a Tuple
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Create a tuple
let coordinate;
// 2. Assign values
coordinate = [126.9780, 37.5665];
// 4. Create an object
const myPlace = {
    description: "Seoul",
    coords: coordinate
};
// 5. console.log
console.log("--- Location Details ---");
console.log(`Description: ${myPlace.description}`);
console.log(`X: ${myPlace.coords[0]}, Y: ${myPlace.coords[1]}`);
//# sourceMappingURL=ex04.js.map