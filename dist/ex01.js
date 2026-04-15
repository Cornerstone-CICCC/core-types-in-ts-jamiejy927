"use strict";
// Exercise 1: Create a Reservation Object
Object.defineProperty(exports, "__esModule", { value: true });
// 1. reservation
const reservation = {
    customerInformation: "Jamie",
    paymentInformation: "Credit Card",
    checkIn: new Date("2026-04-14"),
    checkOut: new Date("2026-04-20"),
};
// 2. console.log
console.log("--- Reservation Object Information ---");
console.log("Customer Name:", reservation.customerInformation);
console.log("Payment Method:", reservation.paymentInformation);
console.log("Check-In Date:", reservation.checkIn.toDateString());
console.log("Check-Out Date:", reservation.checkOut.toDateString());
//# sourceMappingURL=ex01.js.map