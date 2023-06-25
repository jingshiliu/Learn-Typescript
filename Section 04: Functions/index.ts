// Annotate Function Parameters
// Ts can infer this function return Number even if not annotated
function square(num: number): number{
    return num * num
}

const greet = (person: string = "stranger"): string =>{
    return `Hello, my friend ${person}`
}

console.log(square(2))
console.log(greet())


// Inferred type of anonymous function parameters 
const colors = ["red", "orange", 'blue', 1]
colors.map(color =>{ // color: string is by default in this case, because it is inferred by Typescript

})

// Void
function printTwice(msg: string): void{
    console.log(msg)
    console.log(msg)
}


// Never
// a return value that NEVER occur
// void, on the other hand, returns undefined under the hood
// never, usually annotated to functions that runs forever, or throw an exception before it had a chance to return anything

// void, does not return
// never, never finishes, unable to return

function makeError(): never{
    return 'a'
    throw new Error("error")
}


function gameLoop(): never{
    while(true){
        console.log('game is running')
    }
    return true
}