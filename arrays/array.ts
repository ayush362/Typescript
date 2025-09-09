const activeUsers: string[] = [];
activeUsers.push("Ayush");
console.log(activeUsers);

const ageList: number[] = [21];
console.log(ageList);

// Alternative syntax
const bools: Array<boolean> = [true];

console.log(`Is adult ${bools}`);

// Custom array type

type Point = {
    x: number;
    y: string;
};

const cords: Point[] = [];

cords.push({ x: 21, y: "Ayush" });
console.log(cords);

// Multidimensitonal array

const board: number[][] = [
    [2, 2, 2],
    [3, 3, 3],
    [4, 4, 4],
];
