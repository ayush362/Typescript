type Song = {
    title: string;
    artitst: string;
    numStreams: number;
    credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
    return song.numStreams * 1.333;
}

function printSong(song: Song): void {
    console.log(`${song.title} -  ${song.artitst}`);
}

const mySong: Song = {
    title: "Unchained melody",
    artitst: "ayush",
    numStreams: 3232332,
    credits: {
        producer: "ayush",
        writer: "ayush",
    },
};

console.log(calculatePayout(mySong));

printSong(mySong);

type User = {
    readonly id: number;
    username: string;
};

const user: User = {
    id: 23233,
    username: "ayush",
};

console.log(user.id);
// user.id = 3232;

type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yello",
};

type Cat = {
    numLives: number;
};

type Dog = {
    breed: string;
};

type CatDog = Cat &
    Dog & {
        age: number;
    };

const christy: CatDog = {
    numLives: 7,
    breed: "Huskye",
    age: 11,
};
