"use strict";
class Player {
    first;
    last;
    age = 1;
    height;
    score = 0;
    protectedScore = 0;
    // all field is default to public
    race = "human";
    constructor(first, last, height) {
        this.first = first,
            this.last = last;
        if (height !== undefined)
            this.height = height;
        else
            this.height = 0;
        this.height = 12;
        this.height = 121;
    }
    woo() {
        console.log("WOO");
    }
}
// -------------------- Shorthand --------------------------
class PlayerOne {
    first;
    last;
    _score;
    // Typescript declare and assign passed in values for us
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0)
            throw new Error("Score cannot be negative");
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    first;
    last;
    isAdmin;
    constructor(first, last, isAdmin) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.isAdmin = isAdmin;
        // private is available only in the exact class
        // this.score = 0
        // protected is available also to its Child Class
        this.protectedScore = 1;
    }
}
const superPlayer = new SuperPlayer("Jingshi", "Liu", true);
class ColorfulPlayer extends Player {
    color = "yellow";
}
class ColorfulJumppableSuperPlayer extends SuperPlayer {
    first;
    last;
    isAdmin;
    color;
    constructor(first, last, isAdmin, color) {
        super(first, last, isAdmin);
        this.first = first;
        this.last = last;
        this.isAdmin = isAdmin;
        this.color = color;
    }
    jump() {
        console.log('jump');
    }
}
class ColorfulJumppableIntelligentSuperPlayer extends ColorfulJumppableSuperPlayer {
    first;
    last;
    isAdmin;
    color;
    isIntelligent;
    constructor(first, last, isAdmin, color, isIntelligent) {
        super(first, last, isAdmin, color);
        this.first = first;
        this.last = last;
        this.isAdmin = isAdmin;
        this.color = color;
        this.isIntelligent = isIntelligent;
    }
    jump() {
        console.log('jump');
    }
}
