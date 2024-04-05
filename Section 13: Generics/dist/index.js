"use strict";
const btn = document.querySelector("#btn");
function identity(item) {
    return item;
}
function getRandomElement(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}
class GoodPerson {
    first;
    last;
    isGood = true;
    constructor(first, last, isGood) {
        this.first = first;
        this.last = last;
        if (isGood === false)
            this.isGood = false;
    }
}
const goodPeople = [
    new GoodPerson("Jingshi", "Liu"),
    new GoodPerson("Jingkao", "Liu"),
    new GoodPerson("Tammy", "Sanchez", false)
];
btn?.addEventListener('click', () => {
    console.log(getRandomElement(goodPeople));
});
// -------------------- Multiple Generics ---------------------------
// It accepts anything, like Number, String, even if they cannot be deconstructed
const merge = (obj1, obj2) => {
    return {
        ...obj1,
        ...obj2
    };
};
const mergedObj = merge({ name: "Jingshi" }, { pets: "Doudou" });
console.log(mergedObj);
// -------------------- Add Generics Constraints ---------------------------
// By extend from a Type, we narrow down the Generic types
// otherwise, passing a primitive type like boolean, number, will result in unexpected behavior
const mergeObject = (obj1, obj2) => {
    return {
        ...obj1,
        ...obj2
    };
};
function getLength(thing) {
    return thing.length;
}
// As long the param has a property of length, it is treated as implements the interface
getLength([1]);
// getLength({a: 1})
// -------------------- Default Generic Type Return ---------------------------
function makeEmptyArray() {
    return [];
}
const nums = makeEmptyArray();
const bools = makeEmptyArray();
