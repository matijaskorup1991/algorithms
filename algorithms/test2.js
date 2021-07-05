function getInxToIns(arr, num) {
  let sorted = arr.sort((a, b) => a - b);
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sorted[i] < num) {
      counter += 1;
    }
  }
  return counter;
}

// console.log(getInxToIns([20, 3, 5], 19));

function rot13(str) {
  let regex = /[a-zA-Z0-9]/;
  return str
    .split('')
    .map((el) => (regex.test(el) ? el.charCodeAt(0) + 13 : el))
    .map((el) => String.fromCharCode(el))
    .join('');
}

// console.log(rot13('lorem'));

function sumAll(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let a = sorted[0];
  let b = sorted[1];
  let res = 0;
  for (let i = a; i <= b; i++) {
    res += i;
  }
  return res;
}

// console.log(sumAll([1, 4]));
// console.log(sumAll([5, 10]));

function diffArray(arr1, arr2) {
  let newArray = [...arr1, ...arr2];
  return newArray.filter((el) => !arr1.includes(el) || !arr2.includes(el));
}

// console.log(diffArray([1, 2, 3, 4], [1, 2, 3, 4, 5, 6]));

function convertToRoman(num) {
  let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let res = '';
  for (let key in roman) {
    while (num >= roman[key]) {
      res += key;
      num -= roman[key];
    }
  }
  return res;
}

// console.log(convertToRoman(1500));

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//  *
//  * You may assume that each input would have exactly one solution, and you may not use the same element twice.
//  *
//  * Example:
//  *
//  * Given nums = [2, 7, 11, 15], target = 9,
//  *
//  * Because nums[0] + nums[1] = 2 + 7 = 9,
//  * return [0, 1].

function twoSum(arr, target) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        res.push([arr.indexOf(arr[i]), arr.indexOf(arr[j])]);
      }
    }
  }
  return res;
}

// console.log(twoSum([2, 7, 11, 15], 9));

// * Median of Two Sorted Arrays
// *
// * There are two sorted arrays nums1 and nums2 of size m and n respectively.
// *
// * Find the median of the two sorted arrays.
// *
// * Example 1:
// * nums1 = [1, 3]
// * nums2 = [2]
// *
// * The median is 2.0
// * Example 2:
// * nums1 = [1, 2]
// * nums2 = [3, 4]
// *
// * The median is (2 + 3)/2 = 2.5
// */

// /**
// * Find the median from two sorted arrays

function median(arr1, arr2) {
  let length = arr1.length + arr2.length;
  return (
    (arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0)) / length
  );
}

// console.log(median([1, 2], [3, 4]));

/**
 * Plus One
 *
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
 *
 * You may assume the integer do not contain any leading zero, except the number 0 itself.
 *
 * The digits are stored such that the most significant digit is at the head of the list.
 *
 * Example 1:
 *
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 *
 * Example 2:
 *
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 */

function plusOne(num) {
  let number = Number(num.join(''));
  number = number + 1;
  return String(number).split('');
}

// console.log(plusOne([4, 3, 2, 1]));

/**
 * Find All Numbers Disappeared in an Array
 *
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 *
 * Find all the elements of [1, n] inclusive that do not appear in this array.
 *
 *
 * Example:
 *
 * Input:
 * [4,3,2,7,8,2,3,1]
 *
 * Output:
 * [5,6]
 */

function findNumbers(arr) {
  let newArr = arr.sort((a, b) => a - b);
  let res = [];
  for (let i = newArr[0]; i < newArr[newArr.length - 1]; i++) {
    res.push(i);
  }
  return res.filter((el) => !newArr.includes(el));
}
// console.log(findNumbers([4, 3, 2, 7, 8, 2, 3, 1]));

/**
 * Find Peak Element
 *
 * A peak element is an element that is greater than its neighbors.
 *
 * Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.
 *
 * The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
 *
 * You may imagine that num[-1] = num[n] = -∞.
 *
 * For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.
 */

function peakElement(arr) {
  let res = '';
  if (arr.indexOf(Math.max(...arr)) === 0) {
    return 0;
  } else if (arr.indexOf(Math.max(...arr)) === arr.length - 1) {
    return arr.length - 1;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i + 1] < arr[i] && arr[i] > arr[i - 1]) {
      res = arr.indexOf(arr[i]);
    }
  }
  return res;
}
// console.log(peakElement([1, 2, 3, 4, 5, 6, 9]));

/**
 * First Unique Character in a String
 *
 * Given a string, find the first non-repeating character in it and return it's index.
 * If it doesn't exist, return -1.
 *
 * Examples:
 *
 * s = "leetcode"
 * return 0.
 *
 * s = "loveleetcode",
 * return 2.
 */

function firstUnique(str) {
  let res = {};
  let char;
  for (let i of str) {
    if (res[i]) {
      res[i] += 1;
    } else {
      res[i] = 1;
    }
  }
  for (let item in res) {
    if (res[item] === 1) {
      char = str.indexOf(item);
      break;
    }
  }
  return char ? char : -1;
}

// console.log(firstUnique('loveleetcode'));

/**
 * Judge Route Circle
 *
 * Initially, there is a Robot at position (0, 0). Given a sequence of its moves,
 * judge if this robot makes a circle, which means it moves back to the original place.
 *
 * The move sequence is represented by a string. And each move is represent by a character.
 * The valid robot moves are R (Right), L (Left), U (Up) and D (down).
 *
 * The output should be true or false representing whether the robot makes a circle.
 *
 * Example 1:
 * Input: "UD"
 * Output: true
 *
 * Example 2:
 * Input: "LL"
 * Output: false
 */

function routeCircle(input) {
  let res = {
    R: 0,
    L: 0,
    U: 0,
    D: 0,
  };

  for (let item of input) {
    res[item]++;
  }

  if (res.R === res.L && res.U === res.D) return true;
  return false;
}

// console.log(routeCircle('LL'));

function addTogether(a, ...args) {
  console.log(args);
  if (args.length === 1) {
    return a + args[0];
  }

  return (...args) => a + args[0];
}

console.log(addTogether(5, 10));
// let add5 = addTogether(5);
// console.log(add5(5));
