/* ========== VARIABLES ========== */
// Create a Variable: var
var favoriteFood = "pizza";
console.log(favoriteFood);

// Create a Variable: let
let changeMe = true;
console.log(changeMe);
changeMe = false;
console.log(changeMe);

// Create a Variable: const
const entree = "Enchiladas";
console.log(entree);

// Mathematical Assignment Operators
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

console.log("The value of levelUp:", levelUp);
console.log("The value of powerLevel:", powerLevel);
console.log("The value of multiplyMe:", multiplyMe);
console.log("The value of quarterMe:", quarterMe);

// The Increment and Decrement Operator
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
console.log(gainedDollar);

lostDollar--;
console.log(lostDollar);

// String Concatenation with Variables
let favoriteAnimal = "dog";
console.log("My favorite animal:" + favoriteAnimal);

// String Interpolation using Template Literals
const myName = "Belle";
const myCity = "Paris";
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

// typeof operator: check the data type of a variable’s value
let newVariable = "Playing around with typeof.";
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);


/* ========== CONDITIONAL STATEMENTS ========== */
// If Statement
let sale = true;
sale = false;
if (sale) {
  console.log("Time to buy!");
}

// If...Else Statements - allow us to automate solutions to yes-or-no questions, also known as binary decisions.

let sale = true;
sale = false;

if (sale) {
  console.log("Time to buy!");
} else {
  console.log("Time to wait for a sale.");
}

// Comparison Operators (>, <, <=,>=,===,!==)
let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}

// Logical Operators - and(&&), or(||), not or bang(!)
let mood = "sleepy";
let tirednessLevel = 6;

if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet");
}

// Truthy and Falsy
let wordCount = 100;
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = 'Hello World';
if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Truthy and Falsy Assignment 
// Use short circuit evaluation to assign  writingUtensil variable below:
let tool = 'marker';
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);


// Ternary Operator
let isLocked = false;
/*
if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}
*/
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;
/*
if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}
*/
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';
/*
if (favoritePhrase  === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}
*/
favoritePhrase === 'Love That!' ? console.log("I love that!") : console.log("I don't love that!");


// Else If Statements => allow you to have multiple possible outcomes
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

// The switch statement
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place' :
    console.log('You get the gold medal!');
    break;
  case 'second place' :
    console.log('You get the silver medal!');
    break;
  case 'third place' :
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}



/* ========== FUNCTIONS ========== */
// Arrow function with two arguments 
const sum = (firstParam, secondParam) => { 
  return firstParam + secondParam; 
}; 
console.log(sum(2,5)); // Prints: 7 
 
// Arrow function with no arguments 
const printHello = () => { 
  console.log('hello'); 
}; 
printHello(); // Prints: hello
 
// Arrow functions with a single argument 
const checkWeight = weight => { 
  console.log(`Baggage weight : ${weight} kilograms.`); 
}; 
checkWeight(25); // Prints: Baggage weight : 25 kilograms.
 
 
// Concise arrow functions
const multiply = (a, b) => a * b; 
console.log(multiply(2, 30)); // Prints: 60



/* ========== ARRAYS ========== */
// .push() => adds one or more elements to the array 
//Adding a single element:
const cart = ['apple', 'orange'];
cart.push('pear'); 
 
// Adding multiple elements:
const numbers = [1, 2];
numbers.push(3, 4, 5);

// .pop() method removes the last element from an array and returns that element.
const ingredients = ['eggs', 'flour', 'chocolate'];
 
const poppedIngredient = ingredients.pop(); // 'chocolate'
console.log(ingredients); // ['eggs', 'flour']



/* ========== LOOPS ========== */
// while loop 
while (condition) {
  // code block to be executed
}
 
let i = 0;
while (i < 5) {        
  console.log(i);
  i++;
}

// reverse loop
const items = ['apricot', 'banana', 'cherry'];
 
for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items[i]}`);
}
// Prints: 2. cherry
// Prints: 1. banana
// Prints: 0. apricot


// do...while statement 
x = 0
i = 0
 
do {
  x = x + i;
  console.log(x)
  i++;
} while (i < 5);
 // Prints: 0 1 3 6 10


// for loop
for (let i = 0; i < 4; i += 1) {
  console.log(i);
};
 // Output: 0, 1, 2, 3


// Looping through arrays
for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}
// Output: Every item in the array


// break keyword
for (let i = 0; i < 99; i += 1) {
  if (i > 5) {
     break;
  }
  console.log(i)
}
// Output: 0 1 2 3 4 5


// Nested For Loop
for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner < 3; inner += 1) {
    console.log(`${outer}-${inner}`);
  }
}
 
/* 
Output:
0-0
0-1
0-2
1-0
1-1
1-2
*/