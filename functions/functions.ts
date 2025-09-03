function greet(person: string) {
    return "Hello, " + person;
}

console.log(greet("Ayush"));
// console.log(greet(1)); // Will throw an error

const doSomething = (person: string, age: number, isFunny: boolean) => {
    console.log(`${person} is, ${age} years old and is, ${isFunny ? "funny" : "not funny"}`);
};

doSomething("Ayush", 21, true);
