let movieTitle: string = 'Avatar'
movieTitle = 'Iron man'

// error on assigning different type and calling a function not exist
// movieTitle = 2
// movieTitle.upper()




let numCatLives: number = 10
numCatLives ++

let gameOver: boolean = false
console.log(movieTitle)


// Type Inference
// Typescript can figure out the primitive types of variable

let movie = 'Avengers'
movie = 'Iron Man'

movie = 1



// Any Type
// basically saying do not check type for it
let thing: any = 'hello'
thing = 1
thing = true
thing()

let anotherThing = 'hello'
anotherThing.crAts()


// implicit any type

const movies = ['Arrival', 'The Thing', 'Aliens']
let foundMovie // Implicit Any, it does NOT assign a type when first assign a value to it

for(let theMovie of movies){
    if (theMovie === 'Arrival')
        theMovie = 'Arrival' 
}

foundMovie() // no error 

// -------------
// We should do this

const movies1 = ['Arrival', 'The Thing', 'Aliens']
let foundMovie1: string // Type String

for(let theMovie of movies){
    if (theMovie === 'Arrival')
        theMovie = 'Arrival' // Still string
}

foundMovie1() // error

