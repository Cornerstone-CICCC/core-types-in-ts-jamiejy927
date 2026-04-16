"use strict";
// Exercise 6: Union Types for Function Parameters
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Create a function
function printId(id) {
    // 2. Check the type
    if (typeof id === "string") {
        console.log(`Your ID is a string type: ${id}`);
    }
    else {
        console.log(`Your ID is a number type: ${id}`);
    }
    return id;
}
// 4. console.log
console.log("--- ID Verification ---");
printId(333);
printId("jamiejy927");
//# sourceMappingURL=ex06.js.map