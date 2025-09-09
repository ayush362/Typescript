function printName(name: { first: string; last: string }) {
    console.log(`${name.first} ${name.last}`);
}

printName({ first: "Ayush", last: "Khatri" });

let coordinate: { x: number; y: number } = { x: 34, y: 2 };

function randomCoordinate(): { x: number; y: number } {
    return { x: Math.random(), y: Math.random() };
}
