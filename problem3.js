function calculateTotal(...numbers) {

    if (!numbers.every(n => typeof n === "number")) {
        throw new TypeError("Invalid input: All arguments must be numbers");
    }

    return numbers.reduce((total, num) => total + num, 0);
}
console.log(calculateTotal(1, 2, 3, 4)); 