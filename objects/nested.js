function calculatePayout(song) {
    return song.numStreams * 1.333;
}
function printSong(song) {
    console.log("".concat(song.title, " -  ").concat(song.artitst));
}
var mySong = {
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
