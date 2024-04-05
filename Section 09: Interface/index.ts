interface Point{
    x: number,
    y: number
}

const p1: Point = {x: 1, y: 2, z: 2}


interface Person{
    first: string,
    last: string,
    nickname?: string,
    sayHi: () => string,
    sayNo(name: string): string
}

const thomas: Person = {
    first: 'Thomas', 
    last: 'Hard', 
    sayHi: () => 'hi',
    sayNo(name: string) {
        return 'No' + name
    },
}


// We can add properties to Interface
// but it will cause error for Point before this line
interface Point{
    z: number
}

const p2: Point = {
    x: 1,
    y: 2,
    z: 3
}

type MyPoint = {
    bard(): string
}

const mp1: MyPoint = {
    bard: () => 'bard'
}


// EXTENDS

interface Dog{
    name: string,
    breed: string
}

interface ServiceDog extends Dog{
    service: string
}

function woof(dog: Dog){
    console.log(`${dog.name} is a ${dog.breed}, and Woof`)
}

const lucky: Dog = {
    name: 'Lucky',
    breed: 'Husky'
}

const doky: ServiceDog = {
    name: 'Doky',
    breed: 'Dook',
    service: 'police'
}

woof(doky)
woof(lucky)

function a(asds){
    return asds
}

let me: Person = {
    first: "j",
    last: 's',
    sayNo(name){
        return 's'
    },
    sayHi(){
        return 's'
    }
}


