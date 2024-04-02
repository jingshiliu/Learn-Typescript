type Point = {
    x: number,
    y: number
}

type Loc = {
    lat: string,
    long: string
}

// Coordinate can be either of them
type Coordinate = Point | Loc

// Narrowing types
function calculateTax(price: number| string, tax: number){
    price.toUpperCase()
    price *= tax
    if (typeof price === 'string'){
        price.toUpperCase()
    }else{
        price *= tax
    }
}


// Union Types and Array
const stuff: (number| string)[] = [1, 2, 'ase']
const moreStuff: Array<(number| string)> = [1, 2, 'ase']


// LITERAL Type
const yes: 'yes' = 'yes'
const no: 'no' = 'yes'

//useful combine with Union
function good(isGood: 'yes'| 'no'){
    if(isGood === 'yes') console.log('great')
    if(isGood === 'no') console.log('nah')
}