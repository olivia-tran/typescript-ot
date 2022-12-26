"use strict";
exports.__esModule = true;
function greet(person) {
    return "Hi there, ".concat(person);
}
// const doSomething = (person: string, age: number, isFunny: boolean) => {};
greet("Olivia");
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
function twoFer(name) {
    if (name === void 0) { name = "you"; }
    return "one for ".concat(name, ", one for me");
}
// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false
function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doubleCoordinate(coordinate) {
    return { x: coordinate.x * 2, y: coordinate.y * 2 };
}
console.log(doubleCoordinate(coordinate));
var happyFace = {
    radius: 4,
    color: "yellow"
};
console.log(happyFace);
