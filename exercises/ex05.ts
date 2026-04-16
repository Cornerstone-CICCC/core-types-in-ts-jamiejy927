// Exercise 5: Create an Enum

// 1. Create an enum
enum Day {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

// 2. Declare a variable
const today: Day = Day.Tuesday;
console.log(`Today is: ${Day[today]}`);

// 3. Create an interface
interface Race {
    name: string;
    participants: string[];
    firstPlace: string;
    secondPlace: string;
    thirdPlace: string;
    day: Day;
}

// 4. Create a race object
const marathon: Race = {
    name: "City Marathon 2026",
    participants: ["Jamie", "Amy", "Brad", "Charlie"],
    firstPlace: "Amy",
    secondPlace: "Jamie",
    thirdPlace: "Brad",
    day: Day.Saturday
};

// 5. console.log
console.log("--- Race Information ---");
console.log(`Event: ${marathon.name}`);
console.log(`Day: ${Day[marathon.day]}`);
console.log(`Winner: ${marathon.firstPlace}`);
console.log(`Runner-up: ${marathon.secondPlace}`);