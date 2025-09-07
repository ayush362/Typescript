// function greet(person: string) {
//     return "Hello, " + person;
// }

// console.log(greet());
// console.log(greet(1)); // Will throw an error

const doSomething = (person: string, age: number, isFunny: boolean) => {
    console.log(
        `${person} is, ${age} years old and is, ${
            isFunny ? "funny" : "not funny"
        }`
    );
};

// doSomething("Ayush", 21, true);

function greet(person: string = "Stranger") {
    return "Hello, " + person;
}

function square(num: number): number {
    return num ** 2;
}

// console.log(square(4));

function random(num: number) {
    if (Math.random() < 0.5) {
        return num.toString() + " is a string";
    }
    return num;
}
console.log(random(4));
