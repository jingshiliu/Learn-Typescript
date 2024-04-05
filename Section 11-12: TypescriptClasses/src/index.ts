class Player{
    first: string
    last: string
    age: number = 1

    readonly height: number

    private score: number = 0
    protected protectedScore: number = 0

    // all field is default to public
    public race: string = "human"

    constructor(first: string, last: string, height?: number ){
        this.first = first,
        this.last = last
        if(height !== undefined)
            this.height = height
        else
            this.height = 0
        this.height = 12
        this.height = 121
    }

    private woo(){
        console.log("WOO")
    }
}


// -------------------- Shorthand --------------------------

class PlayerOne{
    // Typescript declare and assign passed in values for us
    constructor(
        public first: string,
        public last: string,
        private _score: number
    ){

    }

    get fullName(): string{
        return `${this.first} ${this.last}`
    }

    get score(): number{
        return this._score
    }

    set score(newScore: number){
        if (newScore < 0)
            throw new Error("Score cannot be negative")
        this._score = newScore
    }
}

class SuperPlayer extends Player{
    constructor(
        public first: string,
        public last: string,
        public isAdmin: boolean
    ){
        super(first, last)
        // private is available only in the exact class
        // this.score = 0

        // protected is available also to its Child Class
        this.protectedScore = 1
    }
}

const superPlayer: SuperPlayer = new SuperPlayer("Jingshi", "Liu", true)
// superPlayer.protectedScore


interface Colorful{
    color: string
}

interface Jumppable{
    jump(): void
}

interface Intelligent{
    isIntelligent: boolean
}


class ColorfulPlayer extends Player implements Colorful{
    color: string = "yellow"
}


class ColorfulJumppableSuperPlayer extends SuperPlayer implements Colorful, Jumppable{

    constructor(
        public first: string,
        public last: string,
        public isAdmin: boolean,
        public color: string
    ){
        super(first, last, isAdmin)
    }

    jump(){
        console.log('jump')
    }
}

class ColorfulJumppableIntelligentSuperPlayer extends ColorfulJumppableSuperPlayer implements Intelligent{
    constructor(
        public first: string,
        public last: string,
        public isAdmin: boolean,
        public color: string,
        public isIntelligent: boolean
    ){
        super(first, last, isAdmin, color)
    }

    jump(){
        console.log('jump')
    }
}