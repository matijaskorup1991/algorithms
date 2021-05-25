// Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation.
// Lowercase characters can be numbers. If method gets number, it should return string.

function toUnderscore(str) {
  if (typeof str === 'number') return String(str);
  let regEx = /[A-Z]/g;
  let res = str.replace(regEx, (el) => `_${el.toLowerCase()}`);
  return res.substring(1);
}

// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals,
// and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array.
// The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

function sumIntervals(arr) {
  let res = [];

  arr.forEach((el) => {
    for (let i = el[0]; i < el[el.length - 1]; i++) {
      res.push(i);
    }
  });

  let set = new Set(res);
  return Array.from(set).length;
}

console.log(
  sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ])
);

function justify(str, len) {
  let start = 0;
  let end = len;

  while (str.length > start) {
    console.log(str.substring(start, end));
    start += len;
    end += len;
  }
}

console.log(
  justify(
    'empor  eget.  In quis rhoncus nunc,  at  aliquet orci. Fusce at   dolor   sit   amet  felis suscipit   tristique.   Nam  a imperdiet   tellus.  Nulla  e',
    10
  )
);

// Write a function that takes an array of values and moves all elements that are zero to the end of the array,
//  otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

// For example, the following array

// [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

// is transformed into

// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

// Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

function removeZeros(array) {
  let arr1 = [];
  let arr2 = [];
  array.map((el) => {
    if (el === '0' || el === 0) {
      arr2 = [...arr2, el];
    } else {
      arr1 = [...arr1, el];
    }
  });
  return [...arr1, ...arr2];
}

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 * ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

function zeros(n) {
  if (n === 0) return 0;
  let count = 0;
  let rez = n;
  for (let i = n - 1; i >= 1; i--) {
    rez *= i;
  }
  rez = String(rez);
  let a = rez.split('').reverse();
  for (let i = 0; i < a.length; i++) {
    if (a[i] == 0) {
      count++;
    } else {
      break;
    }
  }
  console.log(rez);
  return count;
}

console.log(zeros(3));

function topThreeWords(text) {
  let obj = {};
  let regEx = /[,.!?:;]/g;
  let data = text.replace(regEx, '').split(' ');

  data.forEach((el) => {
    if (obj[el]) {
      obj[el] += 1;
    } else {
      obj[el] = 1;
    }
  });
  return Object.keys(obj)
    .sort((a, b) => obj[b] - obj[a])
    .slice(0, 3);
}

console.log(
  topThreeWords(
    'In a village of La Matija Matija Matija Mancha, the name of which I have no desire to call tomind, there lived not long since one of those gentlemen that keep a lanceon Sundays, made away with three-quarters of his income'
  )
);
