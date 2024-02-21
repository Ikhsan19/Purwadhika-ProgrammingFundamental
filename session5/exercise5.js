// Number 3 Part 1
// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

const string2Array = (string) => {
    let word = "";
    let newArray = [];
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
        if (string[i] !== " ") {
            word += string[i];
        } else {
            newArray.push(word);
            word = "";
        }
    }
    if (word !== "") {
        newArray.push(word);
    }
    return newArray;
};