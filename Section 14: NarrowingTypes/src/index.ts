
// --------------------------- typeof -------------------------------
function triple(val: number| string){
    if(typeof val === 'number')
        return val * 3
    return val.repeat(3)
}

// --------------------------- Truthiness -------------------------------
function printString(word: string| null){
    if(word)
        console.log(word)
}


// ------------------------- IN ------------------------------------------
interface Movie{
    title: string
    duration: number
}

interface TVShow{
    title: string
    numEps: number
    epDuration: number
}

function getTotalDuration(show: Movie| TVShow): number{
    // if property "duration" is in show
    if("duration" in show)
        return show.duration
    return show.epDuration * show.numEps
}


// --------------------------- InstanceOf -------------------------------
interface Person{
    first: string
    last: string
}

class FastPerson implements Person{
    readonly description: string = "fast"
    constructor(
        public first: string,
        public last: string
    ){

    }
}

class SmartPerson implements Person{
    readonly description: string = "smart"

    constructor(
        public first: string,
        public last: string
    ){}
}

class LazyPerson implements Person{
    readonly description: string = "lazy"

    constructor(
        public first: string,
        public last: string
    ){}
}

function typePerson(person: Person){
    if(person instanceof FastPerson)
        console.log(person, '\n Im fast')
    else if(person instanceof LazyPerson)
        console.log(person, '\n Im lazy')
    else if(person instanceof SmartPerson)
        console.log(person, '\n Im smart')
}


// --------------------------- Type Predicate -------------------------------
// We can use this function to check if it is a SmartPerson
// But Typescript doesnt understand
// So we add "person is SmartPerson" to tell Typescript the purpose of this function
function isSmartPerson(person: Person): person is SmartPerson{
    return (person as SmartPerson).description === 'smart'
}

function tellMe(person: Person): void{
    if(isSmartPerson(person)){
        console.log('This person is smart', person)
        
    }
}


// --------------------------- Discriminated Unions -------------------------------
// add a property with a unique literal type
// literal type is basically a variable that must have certain values
// to distinguish between Types that are very similar
// interface FarmAnimal {
//     name: string
//     weight: number
//     kind: 'rooster' | 'cow'  | 'pig' | 'super'

// }

// Typescript is smart enough to tell the Type with discriminated Union
// MUST use TYPE UNION
// You have to use a Type Union to make it work
type FarmAnimal = Rooster| Cow| Pig | SuperAnimal
// You can reference a type before declaration as long as it's written down somewhere
// TS look over the whole set of Types while compiling
interface Rooster{
    name: string
    weight: number
    kind: 'rooster'
}

interface Cow{
    name: string
    weight: number
    kind: 'cow'
}

interface Pig{
    name: string
    weight: number
    kind: 'pig'
}

interface SuperAnimal{
    name: string
    weight: number
    kind: 'super'
}



function getKindOfFarmAnimal(farmAnimal: FarmAnimal){
    switch(farmAnimal.kind){
        case('pig'):
            console.log(`${farmAnimal.name} is pig`)
            break
        case('cow'):
            console.log(`${farmAnimal.name} is cow`)
            break
        case('rooster'):
            console.log(`${farmAnimal.name} is rooster`)
            break
        case('super'):
            console.log(`${farmAnimal.name} is super`)
            break
        default:
            // we should never make it here if code handle correctly
            // in case we add a new type and forgot to add in this function
            // it would run into the default
            // we write a piece of code that make Typescript complaint to notify us
            // NEVER can be assigned to all types, but NO type can assigned to a NEVER
            const shouldNeverReachHere: never = farmAnimal
            return shouldNeverReachHere
    }
}

getKindOfFarmAnimal({
    name: 'A',
    weight: 2,
    kind: 'rooster'
})
getKindOfFarmAnimal({
    name: 'A',
    weight: 2,
    kind: 'pig'
})
getKindOfFarmAnimal({
    name: 'A',
    weight: 2,
    kind: 'cow'
})
getKindOfFarmAnimal({
    name: 'A',
    weight: 2,
    kind: 'super'
})
// getKindOfFarmAnimal({
//     name: 'A',
//     weight: 2,
//     kind: 'unhandledAnimal'
// })

console.log("hey")