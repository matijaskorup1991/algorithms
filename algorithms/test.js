function fibonacci(n) {
  let arr = [0, 1];
  if (n === 1 || n === 0 || n < 0) return 1;

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

// console.log(fibonacci(15));

function range(start, end) {
  return Array(end + 1 - start)
    .fill(0)
    .map((el, i) => start + i);
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

// console.log(sum(range(1, 10)));

function twoSums(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr.indexOf(arr[i]), arr.indexOf(arr[j])];
      }
    }
  }
}

// console.log(twoSums([2, 7, 11, 15], 18));

function reverse(num) {
  return Number(
    String(num)
      .split('')
      .reduceRight((a, b) => a + b, '')
  );
}

// console.log(reverse(321));

function vowels(str) {
  let counter = 0;
  let regex = /[aeiouAEIOU]/g;
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      counter++;
    }
  }
  return counter;
}

// console.log(vowels('mAtija'));

function longestWord(str) {
  return str.split(' ').reduce((a, b) => (a.length > b.length ? a : b));
}

// console.log(longestWord('my name is Bond, James Bond'));

//no negative Numbers
//no 0
function mathSequences(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - 2 === arr[i]) {
      return 'Arithmetic';
    } else if (arr[i + 1] / 3 === arr[i]) {
      return 'Geometric';
    }
    return -1;
  }
}
// console.log(mathSequences([2, 4, 6, 8]));
// console.log(mathSequences([3, 9, 27]));
// console.log(mathSequences([2, 5, 14, 89]));

function longestWords(str) {
  let max = 0;
  let res = [];
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > max) {
      max = words[i].length;
    }
  }
  for (let item of words) {
    if (item.length === max) {
      res.push(item);
    }
  }
  return res;
}

// console.log(longestWords('I woke up early today'));

function unique(str) {
  return new Set([...str]).length === str.length;
}

// console.log(unique('abcdeee'));

function arraySum(arr) {
  let max = Math.max(...arr);
  let maxIndex = arr.indexOf(max);
  arr.splice(maxIndex, 1);
  return arr.reduce((a, b) => a + b, 0) === max ? true : false;
}

// console.log(arraySum([1, 2, 4, 6, 13]));
// console.log(arraySum([1, 2, 4, 34, 22]));

function getUnique(arr) {
  let copy = arr.map((el) => el.company);
  let items = Array.from(new Set(copy));
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (items.includes(arr[i].company)) {
      res.push(arr[i]);
      items.splice(arr[i].company, 1);
    }
  }
  return res;
}

// console.log(
//   getUnique([
//     { title: 'Iphone', company: 'Apple' },
//     { title: 's8', company: 'Samsung' },
//     { title: 's9', company: 'Samsung' },
//     { title: 'Mac', company: 'Apple' },
//     { title: 'ipad', company: 'Apple' },
//     { title: 'p30', company: 'Huawei' },
//   ])
// );

function secondValue(arr) {
  let copy = Array.from(new Set(arr));
  return copy.sort((a, b) => a - b);
}

// console.log(secondValue([11, 44, 22]));
// console.log(secondValue([3, 2, 88, 3, -11, 67, 7]));

function isPrime(value) {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(11));
// console.log(isPrime(8));
// console.log(isPrime(121));
// console.log(isPrime(127));

function countLetters(str) {
  let obj = {};
  for (let i of str) {
    if (obj[i]) {
      obj[i] += 1;
    } else {
      obj[i] = 1;
    }
  }
  return Object.entries(obj)
    .flatMap((el) => el.reverse())
    .join('');
}

// console.log(countLetters('matijaaaaaaaa'));

function onlyNumbers(str) {
  let regex = /\d+/g;
  return str.match(regex);
}

// console.log(onlyNumbers('matija1991 test 19 '));

function shuffleArray(arr) {
  let newPos, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    newPos = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[newPos];
    arr[newPos] = temp;
  }
  return arr;
}

// console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function repeatStr(str, num) {
  return new Array(num).fill(str).join('');
}

//
function truncateStr(str, len) {
  if (str.length < len) {
    return str;
  }
  return `${str.substring(0, len - 3)}...`;
}

// console.log(truncateStr('test test test', 8));
