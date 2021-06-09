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
