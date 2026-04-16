"use strict";
// Exercise 9: Using the "Never" Type in a Function
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Create a function
function throwError(message) {
    throw new Error(message);
}
// 2. A function that handles the error using try-catch
function runExercise() {
    try {
        console.log("Starting the program...");
        throwError("Something went wrong!");
        console.log("This will not be printed.");
    }
    catch (error) {
        console.log(`Caught an error: ${error}`);
    }
}
// 4. console.log
console.log("--- Testing Never Type ---");
runExercise();
//# sourceMappingURL=ex09.js.map