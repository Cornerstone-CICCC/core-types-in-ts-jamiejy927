// Exercise 9: Using the "Never" Type in a Function

// 1. Create a function
function throwError(message: string): never {
    throw new Error(message);
}

// 2. A function that handles the error using try-catch
function runExercise(): void {
    try {
        console.log("Starting the program...");
        
        throwError("Something went wrong!");
        
        console.log("This will not be printed."); 
        
    } catch (error) {
        console.log(`Caught an error: ${error}`);
    }
}

// 3. console.log
console.log("--- Testing Never Type ---");
runExercise();