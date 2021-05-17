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

console.log(sumRange(10));
