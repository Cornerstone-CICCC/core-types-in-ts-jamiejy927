// Exercise 4: Create a Tuple

// 1. Create a tuple
let coordinate: [number, number];

// 2. Assign values
coordinate = [126.9780, 37.5665];

// 3. Create a Location interface
interface Location {
    description: string;
    coords: [number, number];
}

// 4. Create an object
const myPlace: Location = {
    description: "Seoul",
    coords: coordinate
};

// 5. console.log
console.log("--- Location Details ---");
console.log(`Description: ${myPlace.description}`);
console.log(`X: ${myPlace.coords[0]}, Y: ${myPlace.coords[1]}`);