// Object type

function printName(name: {firstname: string, lastname: string}): void{
    console.log(`${name.firstname} ${name.lastname}`)
}

type Name = {
    readonly first: string,
    readonly last: string,
    middle?: string // OPTIONAL Property
}

type Coordinate = {
    x: number,
    y: number
}

// If write param inline, TS will enforce the param to be exactly same as the Type
// If declared somewhere else, and passed into the function, TS only checks if REQUIRED Properties exist
// More like INTERFACE
// printName({firstname: 'a', lastname: 'b', middle: 'c'})
const myName = {firstname: 'a', lastname: 'b', middle: 'c'}
printName(myName)


// TYPE INTERSECTION

type Color = {
    color: string
}

type Circle = {
    radius: number
}

type ColorfulCircle = Circle & Color

const colorCircle: ColorfulCircle = {
    color: 'a',
    radius: 1,
}

type ColorfulCircleCoordinate = Circle & Color & {
    x: number,
    y: number
}