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
