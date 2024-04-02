var movieTitle = 'Avatar';
movieTitle = 'Iron man';
// error on assigning different type and calling a function not exist
// movieTitle = 2
// movieTitle.upper()
var numCatLives = 10;
numCatLives++;
var gameOver = false;
console.log(movieTitle);
// Type Inference
// Typescript can figure out the primitive types of variable
var movie = 'Avengers';
movie = 'Iron Man';
movie = 1;
// Any Type
// basically saying do not check type for it
var thing = 'hello';
thing = 1;
thing = true;
thing();
var anotherThing = 'hello';
anotherThing.crAts();
// implicit any type
var movies = ['Arrival', 'The Thing', 'Aliens'];
var foundMovie; // Implicit Any
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var theMovie = movies_1[_i];
    if (theMovie === 'Arrival')
        theMovie = 'Arrival'; // Type Any
}
foundMovie(); // no error 
// -------------
// We should do this
var movies1 = ['Arrival', 'The Thing', 'Aliens'];
var foundMovie1; // Type String
for (var _a = 0, movies_2 = movies; _a < movies_2.length; _a++) {
    var theMovie = movies_2[_a];
    if (theMovie === 'Arrival')
        theMovie = 'Arrival'; // Still string
}
foundMovie1(); // error
