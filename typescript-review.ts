export {};
function greet(person: string) {
  return `Hi there, ${person}`;
}

// const doSomething = (person: string, age: number, isFunny: boolean) => {};

greet("Olivia");

// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
function twoFer(name: string = "you"): string {
  return `one for ${name}, one for me`;
}
// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false
function isLeapYear(year: number): boolean {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo
// console.log(twoFer("Julia"));
// console.log(greet("Olivia"));
// console.log(isLeapYear(2022));
// console.log(isLeapYear(2024));
// console.log(isLeapYear(2020));

type Coordinate = {
  x: number;
  y: number;
};

let coordinate: Coordinate = { x: 34, y: 2 };
function randomCoordinate(): Coordinate {
  return { x: Math.random(), y: Math.random() };
}
function doubleCoordinate(coordinate: Coordinate): Coordinate {
  return { x: coordinate.x * 2, y: coordinate.y * 2 };
}
console.log(doubleCoordinate(coordinate));

type Circle = {
  radius: number;
};
type Colorful = {
  color: string;
};
type ColorfulCircle = Circle & Colorful;
const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

console.log(happyFace);
