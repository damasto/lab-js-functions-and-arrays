// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    return a >= b ? a : b;
}

// Iteration 2 | Find the Longest Word
function checkIfEmpty (arr) {
  return arr.length === 0;
}

const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(arr) {
  let longestWord = "";

  if (checkIfEmpty(arr)) {
    return null;
  } else {
    arr.forEach((element) => {
      if (element.length > longestWord.length) {
        longestWord = element;
      }
    });
    console.log("word to return", longestWord)
    return longestWord;
  }
}

console.log("function returns", findLongestWord(["foo", "marutos", "milstos"]));
// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  let sum = 0;

  arr.forEach((number) => {
    sum += number;
  });
  
  return sum;
}
sumNumbers([4,3,4])
// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  let averageNum = 0;

  if (checkIfEmpty(arr)) {
    return 0
  } else {
    averageNum = sumNumbers(arr) / arr.length;
    return averageNum;
  }
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arr, word) {
  return checkIfEmpty(arr) ? null 
    : !arr.includes(word) ? false : true
}
