// Exercise 8: Guarding Against "Unknown" Type

// 1. Function to handle unknown type
function displayValue(value: unknown): void {
    if (typeof value === "string") {
        console.log(`The value is a string: ${value}`);
    } else if (typeof value === "number") {
        console.log(`The value is a number: ${value}`);
    }
}

// 2. Function for operations
function processUnknown(input: unknown): void {
    if (typeof input === "string") {
        console.log("Input is a string, printing each character:");
       
        for (const char of input) {
            console.log(char);
        }
    } else {
        console.log("Input is not a string, skipping operations.");
    }
}

// 3. console.log
console.log("--- Testing Unknown Type ---");
displayValue("Hello");
displayValue(123);

console.log("--- Processing String ---");
processUnknown("Jamie");