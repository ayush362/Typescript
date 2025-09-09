type Point = {
    x: number;
    y: number;
    z?: number;
};

let coordinate: Point = { x: 34, y: 2 };

function randomCoordinate(): Point {
    return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 };
}
