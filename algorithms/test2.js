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
