let cost = 5;
let sale = 10;

let tax = (cost * 0,2);
let totalCost = cost + tax;
let profit = sale - totalCost;

if (cost < 0 || sale < 0) {
    console.log("Error");
} else {
    console.log(profit);
}