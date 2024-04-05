class Person{
    // Private field
    #height = 10

    constructor(first, last){
        this.first = first
        this.last = last
    }

    // Getter
    // Use as it is a field
    get fullName(){
        return `${this.first} ${this.last}`
    }

    set fullName(newName){
        const [first, last] = newName.split(' ')
        this.first = first
        this.last = last
    }

    getHeight(){
        return this.#height
    }

    // can be access via person.height
    // but dev cannot set it,
    // just a syntax sugar to replace getHeight()
    get height(){
        return this.#height
    }

    // Again, syntax sugar
    // use it as a field
    // but it will perform additional check
    set height(height){
        if(height <= 0){
            throw new Error("Height must be positive")
        }
        this.#height = height
    }
}

const me = new Person("Jingshi", "Liu")
console.log(me.fullName)

// Error
// console.log(me.#height)