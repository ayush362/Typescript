function printName(name) {
    console.log("".concat(name.first, " ").concat(name.last));
}
printName({ first: "Ayush", last: "Khatri" });
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
