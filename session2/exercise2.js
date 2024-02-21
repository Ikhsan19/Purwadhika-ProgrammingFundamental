// Number 1
// Write a code to convert celsius to fahrenheit
// Example: 60 Celcius → 140 Fahrenheit

//Celcius to Fahrenheit -> Ftemp = (Ctemp * 9/5) + 32
const celsiusTemperature = 60;
const fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
console.log(`${celsiusTemperature} derajat Celsius sama dengan ${fahrenheitTemperature} derajat Fahrenheit`);
console.log("====================================================================");

// Number 2
// Write a code to check whether the number is odd or even
// Example: 25 → odd number, 2 → even number
const oddEven = 25;
if (oddEven % 2 === 0) {
    console.log(`${oddEven} adalah angka genap`);
} else {
    console.log(`${oddEven} adalah angka ganjil`);
}
console.log("====================================================================");

// Number 3
// Write a code to check whether the number is prime number or not
// Example: 7 → 7 is a prime number
// Example: 6 → 6 is not a prime number
const primeCheck = 7;
let isPrime = true;
for (let i = 2; i < primeCheck; i++) {
    if (primeCheck % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(`${primeCheck} adalah bilangan prima`);
} else {
    console.log(`${primeCheck} adalah bukan bilangan prima`);
}
console.log("====================================================================");

// Number 4
// Write a code to find the sum of the numbers 1 to N
// Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// Example: 3 → 1 + 2 + 3 = 7
const N = 5;
let sum = 0;
let printSum = `${N} -> `;

for (let i = 1; i <= N; i++) {
    sum += i;
    printSum += i;
    if (i < N) {
        printSum += " + ";
    }
}
console.log(`${printSum} = ${sum}`);
console.log("====================================================================");

// Number 5
// Write a code to find factorial of a number
// Example: 4! → 4 x 3 x 2 x 1 = 24
// Example: 6! → 6 x 4 x 3 x 2 x 1 = 720
const numberFact = 4;
let factorialNum = 1;
let printFactorial = `${numberFact}! -> `;
for (let i = numberFact; i > 0; i--) {
    factorialNum *= i;
    if (numberFact > i) {
        printFactorial += " x ";
    }
    printFactorial += `${i}`;
}
console.log(`${printFactorial} = ${factorialNum}`);
console.log("====================================================================");

// Number 6
// Write a code to print the first N fibonacci numbers
// Example: 15 → 610
let fibonacci_N = 15;
let firstFibonacci = 0;
let secondFibonacci = 1;
let tempFibonacci = 0;
let printFibonacci = `${fibonacci_N} pertama dari fibonacci adalah ${firstFibonacci}, `;
for (let i = secondFibonacci; i < fibonacci_N; i++) {
    tempFibonacci = firstFibonacci + secondFibonacci;
    firstFibonacci = secondFibonacci;
    secondFibonacci = tempFibonacci;
    printFibonacci += i === 1 ? `${firstFibonacci}` : ` , ${firstFibonacci}`;
}
console.log(printFibonacci);