// Exercise 3: Manipulate and Reservations Array

// 1. Interface
interface PaymentInfo {
    isPayed: boolean;
    totalPrice: number;
}

interface Reservation {
    customerInformation: string;
    paymentInformation: PaymentInfo;
    checkIn: Date;
    checkOut: Date;
    pricePerDay: number;
}

// 2. reservations
const reservations: Reservation[] = [];

// 3. calculate total price function
function calculateTotalPrice(checkIn: Date, checkOut: Date, pricePerDay: number): number {
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const dayDiff = timeDiff / (1000 * 60 * 60 * 24);
    return dayDiff * pricePerDay;
}

// 4. new reservation
const checkInDate = new Date("2026-04-15");
const checkOutDate = new Date("2026-04-17");
const pricePerDay = 100;

const newReservation: Reservation = {
    customerInformation: "Jamie",
    pricePerDay: pricePerDay,
    checkIn: checkInDate,
    checkOut: checkOutDate,
    paymentInformation: {
        isPayed: true,
        totalPrice: calculateTotalPrice(checkInDate, checkOutDate, pricePerDay)
    }
};

// 5. add new reservation to reservations array
reservations.push(newReservation);

// 6. console.log
console.log("--- All Reservations ---");
reservations.forEach((res, index) => {
    console.log(`${index + 1}. Customer: ${res.customerInformation}`);
    console.log(`   Stay: ${(res.checkOut.getTime() - res.checkIn.getTime()) / (1000 * 60 * 60 * 24)} days`);
    console.log(`   Total Price: $${res.paymentInformation.totalPrice}`);
});