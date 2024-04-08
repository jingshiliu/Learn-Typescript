"use strict";
// --------------------------- typeof -------------------------------
function triple(val) {
    if (typeof val === 'number')
        return val * 3;
    return val.repeat(3);
}
// --------------------------- Truthiness -------------------------------
function printString(word) {
    if (word)
        console.log(word);
}
function getTotalDuration(show) {
    // if property "duration" is in show
    if ("duration" in show)
        return show.duration;
    return show.epDuration * show.numEps;
}
class FastPerson {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.description = "fast";
    }
}
class SmartPerson {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.description = "smart";
    }
}
class LazyPerson {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.description = "lazy";
    }
}
function typePerson(person) {
    if (person instanceof FastPerson)
        console.log(person, '\n Im fast');
    else if (person instanceof LazyPerson)
        console.log(person, '\n Im lazy');
    else if (person instanceof SmartPerson)
        console.log(person, '\n Im smart');
}
// --------------------------- Type Predicate -------------------------------
// We can use this function to check if it is a SmartPerson
// But Typescript doesnt understand
// So we add "person is SmartPerson" to tell Typescript the purpose of this function
function isSmartPerson(person) {
    return person.description === 'smart';
}
function tellMe(person) {
    if (isSmartPerson(person)) {
        console.log('This person is smart', person);
    }
}
function getKindOfFarmAnimal(farmAnimal) {
    switch (farmAnimal.kind) {
        case ('pig'):
            console.log(`${farmAnimal.name} is pig`);
            break;
        case ('cow'):
            console.log(`${farmAnimal.name} is cow`);
            break;
        case ('rooster'):
            console.log(`${farmAnimal.name} is rooster`);
            break;
        case ('super'):
            console.log(`${farmAnimal.name} is super`);
            break;
        default:
            // we should never make it here if code handle correctly
            // in case we add a new type and forgot to add in this function
            // it would run into the default
            // we write a piece of code that make Typescript complaint to notify us
            // NEVER can be assigned to all types, but NO type can assigned to a NEVER
            const shouldNeverReachHere = farmAnimal;
            return shouldNeverReachHere;
    }
}
getKindOfFarmAnimal({
    name: 'A',
    weight: 2,
    kind: 'rooster'
});
getKindOfFarmAnimal({
    name: 'A',
    weight: 2,
    kind: 'pig'
});
getKindOfFarmAnimal({
    name: 'A',
    weight: 2,
    kind: 'cow'
});
getKindOfFarmAnimal({
    name: 'A',
    weight: 2,
    kind: 'super'
});
// getKindOfFarmAnimal({
//     name: 'A',
//     weight: 2,
//     kind: 'unhandledAnimal'
// })
console.log("hey");
