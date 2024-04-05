const btn = document.querySelector<HTMLButtonElement>("#btn")


function identity<T>(item: T): T{
    return item
}

function getRandomElement<T>(array: Array<T>): T{
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

interface Person{
    first: string,
    last: string
}

class GoodPerson implements Person{
    public readonly isGood: boolean = true
    constructor(
        public first: string,
        public last: string,
        isGood?: boolean
    ){
        if(isGood === false) this.isGood = false
    }
}

const goodPeople: Array<GoodPerson> = [
    new GoodPerson("Jingshi", "Liu"),
    new GoodPerson("Jingkao", "Liu"),
    new GoodPerson("Tammy", "Sanchez", false)
]

btn?.addEventListener('click', ()=>{
    console.log(getRandomElement(goodPeople))
})


// -------------------- Multiple Generics ---------------------------
// It accepts anything, like Number, String, even if they cannot be deconstructed
const merge = <T, U >(obj1: T, obj2: U) => {
    return {
        ...obj1,
        ...obj2
    }
}

const mergedObj = merge({name: "Jingshi"}, {pets: "Doudou"})
console.log(mergedObj)



// -------------------- Add Generics Constraints ---------------------------
// By extend from a Type, we narrow down the Generic types
// otherwise, passing a primitive type like boolean, number, will result in unexpected behavior

const mergeObject = <T extends object, U extends object>(obj1: T, obj2: U) => {
    return {
        ...obj1,
        ...obj2
    }
}

interface Lengthy{
    length: number
}

interface Dummy{
    length: number
}

function getLength<T extends (Lengthy| Dummy)>(thing: T): number{
    return thing.length
}

// As long the param has a property of length, it is treated as implements the interface
getLength([1])
// getLength({a: 1})


// -------------------- Default Generic Type Return ---------------------------
function makeEmptyArray<T = number>(): Array<T>{
    return []
}

const nums = makeEmptyArray()
const bools = makeEmptyArray<boolean>()