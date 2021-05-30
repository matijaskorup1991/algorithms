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

console.log(twoSums([2, 7, 11, 15], 18));
