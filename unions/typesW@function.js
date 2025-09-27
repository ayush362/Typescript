function printAge(age) {
    console.log("You are ".concat(age, " years old"));
}
printAge(23);
printAge("34");
function calcTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
console.log(calcTax("$ 55", 2));
