// Number 1
function areObjectsEqual(obj1, obj2) {
    // Get the keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Iterate through the keys and compare values
    for (let key of keys1) {
        // Check if the key exists in both objects
        if (!keys2.includes(key)) {
            return false;
        }

        // Check if the values for the key are equal
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    // If all checks pass, the objects are equal
    return true;
}

// Example usage:
const firstObj = { a: 2 };
const secondObj = { a: 1 };
console.log(areObjectsEqual(firstObj, secondObj)); // Output: false

// const example3 = { a: "Hello" };
// const example4 = { a: 1 };
// console.log(areObjectsEqual(example3, example4)); // Output: false

// const example5 = { a: 1 };
// const example6 = { a: 1 };
// console.log(areObjectsEqual(example5, example6)); // Output: true

// Number 2
function getObjectIntersection(obj1, obj2) {
    const intersection = {};

    // Iterate through the keys of the first object
    for (let key in obj1) {
        // Check if the key exists in the second object and the values are equal
        if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
            intersection[key] = obj1[key];
        }
    }

    return intersection;
}

// Example usage:
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, c: 3 };
const resultIntersection = getObjectIntersection(obj1, obj2);
console.log(resultIntersection); // Output: { a: 1 }

// Number 3
function mergeAndRemoveDuplicates(array1, array2) {
    const mergedArray = array1.concat(array2);

    // Use a Set to store unique emails
    const uniqueEmails = new Set();

    // Filter out duplicates based on email
    const resultArray = mergedArray.filter((student) => {
        if (!uniqueEmails.has(student.email)) {
            uniqueEmails.add(student.email);
            return true;
        }
        return false;
    });

    return resultArray;
}
// Number 3
// Example usage:
const array1 = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 2', email: 'student2@mail.com' },
];

const array2 = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 3', email: 'student3@mail.com' },
];

const resultArray = mergeAndRemoveDuplicates(array1, array2);
console.log(resultArray);

// Number 4
function switchValuesAndProperties(inputArray) {
    return inputArray.map((obj) => {
        const switchedObject = {};
        for (const key in obj) {
            switchedObject[obj[key]] = key;
        }
        return switchedObject;
    });
}

// Example usage:
const inputArray = [{ name: 'David', age: 20 }];
const outputArray = switchValuesAndProperties(inputArray);
console.log(outputArray);

// Number 5
function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

// Example usage:
const inputNumber = 5;
const result = factorial(inputNumber);
console.log(`${inputNumber}! = ${result}`);


// Number 6
class Player {
    constructor(name, health = 100, power = 10) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    hit(power) {
        this.health -= power;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    useItem(item) {
        this.health += item.health;
        this.power += item.power;
    }

    showStatus() {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        const randomHealth = Math.random() < 0.5 ? 0 : 10;
        const randomPower = Math.random() < 0.5 ? 0 : 10;
        return { health: randomHealth, power: randomPower };
    }

    start() {
        while (this.player1.health > 0 && this.player2.health > 0) {
            // Show each player status before shooting
            this.player1.showStatus();
            this.player2.showStatus();

            // Get random item for each player before shooting
            const item1 = this.getRandomItem();
            const item2 = this.getRandomItem();

            // Apply items to players
            this.player1.useItem(item1);
            this.player2.useItem(item2);

            // Show each player status after shooting
            this.player1.showStatus();
            this.player2.showStatus();

            // Players shoot each other
            this.player1.hit(this.player2.power);
            this.player2.hit(this.player1.power);
        }

        // Show winner name
        if (this.player1.health <= 0) {
            console.log(`${this.player2.name} is the winner!`);
        } else {
            console.log(`${this.player1.name} is the winner!`);
        }
    }
}

// Example usage:
const playerA = new Player("Player A");
const playerB = new Player("Player B");

const shootingGame = new ShootingGame(playerA, playerB);
shootingGame.start();