// Exercise 6: Union Types for Function Parameters

// 1. Create a function
function printId(id: number | string): number | string {
    // 2. Check the type
    if (typeof id === "string") {
        console.log(`Your ID is a string type: ${id}`);
    } else {
        console.log(`Your ID is a number type: ${id}`);
    }

    return id;
}

// 4. console.log
console.log("--- ID Verification ---");
printId(333);
printId("jamiejy927");