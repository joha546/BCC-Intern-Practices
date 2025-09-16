let arr = [11, 22, 33, 44, 55];

let sum = 0;
let average = 0;
for (let i=0; i<arr.length; i++) {
    sum += arr[i];
    average = sum / arr.length;
}

console.log("Average is:", average);