// function greet(person: string) {
//     return "Hello, " + person;
// }
console.log(greet());
// console.log(greet(1)); // Will throw an error
var doSomething = function (person, age, isFunny) {
    console.log("".concat(person, " is, ").concat(age, " years old and is, ").concat(isFunny ? "funny" : "not funny"));
};
doSomething("Ayush", 21, true);
function greet(person) {
    if (person === void 0) { person = "Stranger"; }
    return "Hello, " + person;
}
