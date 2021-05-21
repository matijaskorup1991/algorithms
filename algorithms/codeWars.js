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
