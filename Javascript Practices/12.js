let arr = [1, 2, 3, 4, 5];

let mx = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mx) {
        mx = arr[i];
    }
}
console.log("Maximum value is:", mx);