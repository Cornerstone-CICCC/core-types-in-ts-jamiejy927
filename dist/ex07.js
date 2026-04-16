"use strict";
// Exercise 7: Using Literal Types in Function
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Create a function
function printDirection(direction) {
    // 2. Print a message
    if (direction === "left") {
        console.log("The car is turning LEFT ⬅️");
    }
    else {
        console.log("The car is turning RIGHT ➡️");
    }
}
// 3. console.log
console.log("--- Direction Check ---");
printDirection("left");
printDirection("right");
//# sourceMappingURL=ex07.js.map