// Write a function that returns the sum of two numbers.
// Write a function that returns the sum of all numbers regardless of # of params.
// Example

// For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.

function add(...args) {
  return args.reduce((a, b) => a + b, 0);
}

// sameFrequency:

function sameFrequency(num1, num2) {
  let a = String(num1).split('');
  let b = String(num2).split('');
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) >= 0) count++;
  }
  return b.length === count;
}

console.log(sameFrequency(34, 14));
console.log(sameFrequency(182, 281));
console.log(sameFrequency(22, 222));
console.log(sameFrequency(34, 14));

//Multiple pointers

function areThereDuplicates(...args) {
  let obj = {};
  for (let item of args) {
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }
  for (let item in obj) {
    if (obj[item] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));

//MULTIPLE POINTERS average pair

function averagePair(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) / 2 === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));

//MULTIPLE POINTERS is Subsequence:

function isSubsequence(str1, str2) {
  let a = [...str2];
  let rez = '';
  for (let i = 0; i < str2.length; i++) {
    if (a.indexOf(str1[i]) >= 0) {
      a.splice(a.indexOf(str1[i]), 1);
      rez += str1[i];
    }
  }
  return rez === str1;
}

console.log(isSubsequence('sing', 'sting'));

//MAX SUBARRAY SUM:

function maxSubarraySum(arr, target) {
  if (target > arr.length) return null;
  let temp = 0;
  let max = 0;
  for (let i = 0; i < target; i++) {
    temp += arr[i];
    max = temp;
  }

  for (let i = target; i < arr.length; i++) {
    temp += arr[i] - arr[i - target];
    max = Math.max(max, temp);
  }
  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
