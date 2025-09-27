function printAge(age: number | string): void {
    console.log(`You are ${age} years old`);
}

printAge(23);
printAge("34");

function calcTax(price: number | string, tax: number) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}

console.log(calcTax("$ 55", 2));
