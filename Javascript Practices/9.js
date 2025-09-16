let x = prompt("Enter first number: ");
let y = prompt("Enter second number: ");
let z = prompt("Enter third number: ");

if (x > y && x > z) {
    console.log(`${x} is the largest number`);
}
else if (y > x && y > z) {
    console.log(`${y} is the largest number`);
}
else {
    console.log(`${z} is the largest number`);
}   