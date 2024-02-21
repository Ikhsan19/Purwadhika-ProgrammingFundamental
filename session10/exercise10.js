// 1
// function excelColumnTitleToNumber(columnTitle) {
//     let result = 0;
//     for (let i = 0; i < columnTitle.length; i++) {
//         const char = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
//         result = result * 26 + char;
//     }
//     return result;
// }
// console.log(excelColumnTitleToNumber('A'));

function excel(columnTitle) {
    let columnNumber = 0;

    // A -> (0*26) + 1, B -> (1*26) + 1
    for (let i = 0; i < columnTitle.length; i++) {
        columnNumber = columnNumber * 26 + (columnTitle.charCodeAt(i) - 64);
    }
    return columnNumber;
}

console.log(excel("A"));

// 2
function singleNumber(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
}
console.log(singleNumber([2, 2, 1]));

// =========
function findNonDuplicate(arr = []) {
    return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item))
}

// 3
function sortString(str) {
    return str.split('').sort().join('');
}

function isAnagram(s, t) {
    return sortString(s) === sortString(t);
}
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

// 4
function climbingStaircase(n) {
    const noOfWays = [1, 2]
    for (let i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
    }
    return noOfWays[n - 1]
}
console.log(climbingStaircase(2));

// function climbStairs(n) {
//     if (n == 1 || n == 2) {
//         return n;
//     }

//     let first = 1;
//     let second = 2;
//     for (let i = 3; i <= n; i++) {
//         let third = first + second;
//         first = second;
//         second = third;
//     }
//     return second;
// }
// console.log(climbStairs(4));