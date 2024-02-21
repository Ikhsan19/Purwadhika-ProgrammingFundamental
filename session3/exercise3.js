// Number 1
// Write a code to display the multiplication table of a given integer.
// Example : Number → 9
// Output :
// 9 x 1
// 9 x 2
// …
// 9 x 10
const intNumber = 9;
for (let i = 1; i <= 10; i++) {
    console.log(`${intNumber} x ${i}`);
}
console.log("=======================================");

// Number 2
// Write a code to check whether a string is a palindrome or not.
// Example : ‘madam’ → palindrome
const s = "madam";
if (s === s.split('').reverse().join('')) {
    console.log(`${s} adalah palindrom`);
} else {
    console.log(`${s} adalah bukan palindrom`);
}
console.log("=======================================");

// Number 3
// Write a code to convert centimeter to kilometer.
// Example : 100000 → “1 km”
const cmToKm = 100000;
const cm = 100000;
const km = cm / cmToKm;
console.log(`${cm} Cm = ${km} Km`);
console.log("=======================================");

// Number 4
// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”
const numberToFormat = 1000;
const formattedCurrency = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(numberToFormat);
console.log(formattedCurrency);
console.log("=======================================");

// Number 5
// Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”
const stringNumber5 = "Hello world";
const searchString = "ell";
const modifiedString = stringNumber5.replace(searchString, '');
console.log(modifiedString);
console.log("=======================================");

// Number 6
// Write a code to capitalize the first letter of each word in a string
// Example : “hello world” → “Hello World”
const stringNumber6 = "Hello World";
const words = stringNumber6.split(' ');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
let capitalizedString = words.join(' ');
console.log(capitalizedString);
console.log("=======================================");

// Number 7
// Write a code to reverse a string.
// Example : “hello” → “olleh”
let stringNumber7 = "hello";
let reversedString = stringNumber7.split('').reverse().join('');
console.log(reversedString)
console.log("=======================================");

// Number 8
// Write a code to swap the case of each character from string
// Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
let stringNumber8 = "The QuiCk BrOwN Fox";
let splitString = stringNumber8.split('');
for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === splitString[i].toUpperCase()) {
        splitString[i] = splitString[i].toLowerCase();
    } else {
        splitString[i] = splitString[i].toUpperCase();
    }
}
let swappedString = splitString.join('');
console.log(swappedString);
console.log("=======================================");

// Number 9
// Write a code to find the largest of two given integers
// Example : num1 = 42, num2 = 27 → 42
let num1 = 42;
let num2 = 27;

if (num1 > num2) {
    console.log(`${num1} lebih besar dari ${num2}`);
} else if (num1 < num2) {
    console.log(`${num1} lebih kecil dari ${num2}`);
} else {
    console.log(`${num1} sama besar dengan ${num2}`);
}
console.log("=======================================");

// Number 10
// Write a conditional statement to sort three numbers
// Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
let number1 = 11;
let number2 = 12;
let number3 = 10;

if (number1 <= number2 && number1 <= number3) {
    if (number2 <= number3) {
        console.log(`${number3}, ${number2}, ${number1}`);
    } else {
        console.log(`${number2}, ${number3}, ${number1}`);
    }
} else if (number2 <= number1 && number2 <= number3) {
    if (number1 <= number3) {
        console.log(`${number3}, ${number1}, ${number2}`);
    } else {
        console.log(`${number1}, ${number3}, ${number2}`);
    }
} else if (number3 <= number1 && number3 <= number2) {
    if (number1 <= number2) {
        console.log(`${number2}, ${number1}, ${number3}`);
    } else {
        console.log(`${number1}, ${number2}, ${number3}`);
    }
}
console.log("=======================================");

// Number 11
// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
// Example : “hello” → 1
let inputNumber11 = "hello";
if (typeof inputNumber11 == "string") {
    console.log(1);
} else if (typeof inputNumber11 == "number") {
    console.log(2);
} else {
    console.log(3);
}
console.log("=======================================");

// Number 12
// Write a code to change every letter a into * from a string of input
// Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y
let sentence = "An apple a day keeps the doctors away";
let splitSentence = sentence.split('');
for (let i = 0; i < splitSentence.length; i++) {
    if (splitSentence[i].toLowerCase() == "a") {
        splitSentence[i] = "*";
    }
}
let changedSentence = splitSentence.join('');
console.log(changedSentence);