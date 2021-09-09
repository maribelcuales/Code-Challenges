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
