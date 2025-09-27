let age: number | string = 21;
age = 23;
console.log(age);
age = "21";
console.log(age);

type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 234.2, long: 23.4 };
