// Object type

function printName(name: {firstname: string, lastname: string}): void{
    console.log(`${name.firstname} ${name.lastname}`)
}


// deconstruct object in ts
function printNameTwice({firstname, lastname}: {firstname: string, lastname: string}): void{
    console.log(`${firstname} ${lastname}`)
}



// this is uncommon, but possible...
let coordinate: {x: number, y: number} = {x: 34, y: 24}
let coordinateTwo: {x: 1, y: 2} = {x: 1, y: 224}

function randomCoordinate(): {x: number, y: number}{
    return {x: Math.random(), y: Math.random()}
}



// Excess properties, Inline vs Obj
// inline excess properties cause error
printName({firstname: 'Jing', lastname: 'shi', age: 19})

// declared obj with excess properties is OK
let me = {firstname: 'Jing', lastname: 'shi', age: 19}
printName(me)



// Type Aliases

type Coordinate = {x: number, y: number}

let coordinate1: Coordinate = {x: 34, y: 24}

function randomCoordinate1(): Coordinate{
    return {x: Math.random(), y: Math.random()}
}


// Nested Objects

type Song = {
    title: string,
    artist: string,
    numStreams: number,
    credits?: {
        producer: string,
        writer: string
    }
}

let aSong: Song = {
    title: "Mea",
    artist: "aksjdh",
    numStreams: 123,
    credits: {
        producer: "Pilasd",
        writer: "asda"
    }
}

let secondSong: Song = {
    title: "Mea",
    artist: "aksjdh",
    numStreams: 123
}

function calculatePayout(song: Song): number{
    return song.numStreams * 10 
}



// readonly - a property that cannot change, like a const property
type User = {
    readonly id: number,
    username: string
}

// intersecion types

type Circle = {
    radius: number
}

type Colorful = {
    color: string
}

type ColorfulCircle =  Circle & Colorful

const happyFace: ColorfulCircle = {
    radius: 124,
    color: 'red'
}


type DoubleColorCircle = Circle & Colorful & {secondColor: string}

const cCircle: DoubleColorCircle = {
    radius: 1,
    color: 'red',
    secondColor: 'asd'
}