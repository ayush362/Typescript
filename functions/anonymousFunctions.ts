const colors = ["red", "green", "blue"];

const upperColors = colors.map((color) => {
    return color.toUpperCase();
});

console.log(upperColors)


const printTwice = (msg: string): void => {
    console.log(msg);
    console.log(msg);
};