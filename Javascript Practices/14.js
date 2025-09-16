let arr = [111, 222, 333, 444, 555];

let discount = 10;
for (let i = 0; i < arr.length; i++) {
    let price = arr[i] * discount
    let finalPrice = (price / 100).toFixed(2);
    console.log(finalPrice);
}