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

console.log(sum(range(1, 10)));
