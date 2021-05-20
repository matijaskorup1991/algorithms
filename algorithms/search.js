//LINEAR SEARCH:

function linearSearch(arr, el) {
  return arr.indexOf(el);
}

// s
//BINARY SEARCH:

function binarySearch(arr, el) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] !== el && start <= end) {
    if (el < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  if (arr[mid] === el) {
    return mid;
  }
  return -1;
}

function maxChar(str) {
  let obj = {};
  let max = 0;
  let char = '';
  for (let item of str) {
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }
  for (let item in obj) {
    if (obj[item] > max) {
      max = obj[item];
      char = item;
    }
  }
  return char;
}

// console.log(maxChar('staaaaaa'));

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}
// fizzbuzz(15);

function capitalizeWords(str) {
  let input = str.split(' ').map((el) => el.toLowerCase());
  return input
    .map((el) => {
      return el.charAt(0).toUpperCase() + el.slice(1);
    })
    .join(' ');
}

console.log(capitalizeWords('sHoRt ANd StOUt'));

function chunk(arr, size) {
  if (size > arr.length) return arr;
  let start = 0;
  let count = size;
  let res = [];
  while (arr.length > start) {
    res.push(arr.slice(start, count));
    start += size;
    count += size;
  }
  return res;
}

// console.log(chunk([1, 2, 3, 4, 5], 3));
function caesarCiper(str, shift) {
  let reqEx = /[0-9]/g;
  let char = str
    .split(' ')
    .map((el) => {
      return el
        .split('')
        .map((el) =>
          reqEx.test(el) ? el : String.fromCharCode(el.charCodeAt(el) + shift)
        )
        .join('');
    })
    .join(' ');
  return char;
}

// console.log(caesarCiper('hello world 5 matija', 1));

function steps(n) {
  let arr = Array(n).fill(' ');
  for (let i = 0; i < n; i++) {
    arr.unshift('#');
    arr.pop();
    console.log(arr.join(''));
  }
}

steps(5);
