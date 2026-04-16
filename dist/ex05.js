"use strict";
// Exercise 5: Create an Enum
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Create an enum
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));
// 2. Declare a variable
const today = Day.Tuesday;
console.log(`Today is: ${Day[today]}`);
// 4. Create a race object
const marathon = {
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
//# sourceMappingURL=ex05.js.map