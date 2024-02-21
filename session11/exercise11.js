// 1
function majority(arr = []) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const count = arr.filter(item => item === arr[i]).length
        const exist = result.find(item => item.element === arr[i])
        if (!exist) {
            result.push({
                element: arr[i],
                count: count
            })
        }
    }
    const element = result.sort((a, b) => b.count - a.count)[0].element
    return element
}
let nums = [3, 2, 3, 4, 4, 4]
console.log(majority(nums))

// 2
var romanToInt = function(s) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentNumeral = romanNumerals[s[i]];
        const nextNumeral = romanNumerals[s[i + 1]];

        if (nextNumeral && currentNumeral < nextNumeral) {
            // Jika simbol berikutnya lebih besar, kurangkan nilai saat ini
            result -= currentNumeral;
        } else {
            result += currentNumeral;
        }
    }

    return result;
}

// Contoh penggunaan
console.log(romanToInt('I')); // Output: 12
console.log(romanToInt('MMMCMXCIX')); // Output: 3999

// 3
function pascalTriangle(numRows = 1) {
    let result = []

    for (let i = 0; i < numRows; i++) {
        const temp = []

        for (let j = 0; j < i; j++) {
            let item = 1

            if (j === 0 || j === i - 1) {
                item = 1
            } else {
                const prevItem = result[i - 1]
                item = prevItem[j - 1] + prevItem[j]
            }

            temp.push(item)
        }

        result.push(temp)
    }

    result.shift()

    return result
}

let numRows = 7

console.log(pascalTriangle(numRows))

// 4
function maximumProfit(prices = []) {
    let maximumProfit = 0
    for (let i = 0; i < prices.length; i++) {
        for (j = i + 1; j < prices.length; j++) {
            const profit = prices[j] - prices[i]
            if (profit > maximumProfit) {
                maximumProfit = profit
            }
        }
    }
    return maximumProfit
}
// const prices = [7, 1, 5, 3, 6, 4]
const prices = [2, 8, 1, 3, 5]
console.log(maximumProfit(prices))