function countDown(num) {
  if (num <= 0) {
    console.log('all done');
    return;
  }
  console.log(num);

  countDown(num - 1);
}

// countDown(100);

//SUM RANGE

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// console.log(sumRange(10));

// SIMPLE FACTORIAl

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(10));

//COLLECT VALUES
function collectOddValues(arr) {
  let result = [];

  function helper(input) {
    if (input.length === 0) return;

    if (input[0] % 2 === 0) result.push(input[0]);
    helper(input.slice(1));
  }
  helper(arr);
  return result;
}

// console.log(collectOddValues([1, 2, 3, 4, 5, 6]));

function power(a, b) {
  if (b === 0) return 1;
  return a * power(a, b - 1);
}

// console.log(power(2, 3));

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 4]));
