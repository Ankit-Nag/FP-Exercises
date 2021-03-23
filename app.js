// FP Exercises
// 1. Integer Array Questions

// Sample Input Array

const sampleArray = [1, 3, 2, 4, 7, 5, 6, 9, 8, 10];

// 1.a Sum of all odd numbers

function sumOfOdd(sum, num) {
    if (num % 2 !== 0) {
        sum = sum + num;
    }
    return sum;
}

console.log(`1.a The sum of all odd numbers in array is: ${sampleArray.reduce(sumOfOdd,0)}`);

// 1.b Sum of all numbers at odd indices

function sumOfOddIndices(acc, cur, index) {
    if (index % 2 !== 0) {
        acc += cur;
    }
    return acc;
}

console.log(`1.b The sum of all numbers at odd indices is: ${sampleArray.reduce(sumOfOddIndices,0)}`);

// 1.c Biggest number in Array

function largestInArray(acc, curr) {
    if (acc > curr) {
        return acc;
    }
    return curr;
}

console.log(`1.c The biggest number in the array is: ${sampleArray.reduce(largestInArray,0)}`);

// 1.d Numbers divisible by 10

const divisibleByTen = (curr) => curr % 10 === 0;

console.log(`1.d The numbers divisible by 10 in the array are: ${sampleArray.filter(divisibleByTen)}`);

// 1.e Add 1 to odd numbers, subtract 1 from even numbers

const incOddDecEven = (curr) => {
    if (curr % 2 === 0) {
        return curr -= 1;
    }
    return curr += 1;
}

console.log(`1.e Array modified by incrementing odd numbers and decrementing even numbers is: ${sampleArray.map(incOddDecEven)}`);

// 1.f Return object with sum of odd and even numbers

const objectSumsOfOddEven = (acc, curr) => curr % 2 === 0 ? {
    ...acc,
    even: acc.even + curr
} : {
    ...acc,
    odd: acc.odd + curr
};

console.log(`1.f Object with sums of odd and even numbers:`, sampleArray.reduce(objectSumsOfOddEven, {
    even: 0,
    odd: 0
}));

// 2. ARRAY QUESTIONS

// Sample of array with strings
const sampleStrings = ['ferrari', 'gm', 'lamborghini', 'porsche', 'bmw', 'aston martin', 'koenigsegg'];

// 2.a Number of strings with similar number of characters

function similarLength() {
    return sampleStrings.reduce((acc, curr) => {
        return {
            ...acc,
            [`${curr.length}`]: acc[`${curr.length}`] ?
                acc[`${curr.length}`] + 1 : 1
        };
    }, {})
}

console.log(`2.a Number of strings with similar number of characters:`, similarLength());

// 2.b Array of strings with vowels

const vowelStrings = (curr) => curr.match(/[aeiou]/g);
console.log(`2.b Strings with vowels:`, sampleStrings.filter(vowelStrings));

// 2.c Array of objects with key as item and value as number of chars in string

const objectStringLengthValue = sampleStrings.reduce((acc, curr) => {
    return [...acc, {
        [curr]: curr.length
    }];
}, []);

console.log(`2.c Results in format- Item: StringLength `, objectStringLengthValue);

// CURRYING
// Function to add username to any text

function addUserName(name) {
    return (sentence) => {
        return `${sentence} ${name}`
    };
};

console.log(addUserName("Ankit")("This is a curry function by"));

// COMPOSITION
// Fn to log any text with username, another fn to write any text with userID
// Compose both fns to give 1 fn that logs any text with userName and ID

const addUserIDToText = (userID, text) => `${text} ${userID}`;
const addUserNametoText = (userName, text) => `${text} ${userName}`;

const composition = (text, userID, userName) => addUserIDToText(userID, addUserNametoText(userName, text));

console.log(composition("This is a composition fn: ", "6", "Ankit"));

// ONE HOMEWORK
// Fn compose() which can take any no. of fns and return a fn 
// which will run given fns in order when called with an argument


const increment = (num) => num+1;
const decrement = (num) => num-1;
const square = (num) => num*num;
const sub3 = (num) => num-3; 

const oneFunc = (...fns) =>{
    return fns.reduce((acc,curr)=>(num)=>curr(acc(num)));
}

const incrementThensub3 = oneFunc(increment,sub3);
console.log(incrementThensub3(5));
console.log(oneFunc(decrement,square,increment)(5));