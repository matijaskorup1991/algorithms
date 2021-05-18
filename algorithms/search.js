//LINEAR SEARCH:

function linearSearch(arr, el) {
  return arr.indexOf(el);
}

// s
//BINARY SEARCH:

function binarySearch(arr, el) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] !== el && start <= end) {
    if (el < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  if (arr[mid] === el) {
    return mid;
  }
  return -1;
}

function maxChar(str) {
  let obj = {};
  let max = 0;
  let char = '';
  for (let item of str) {
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }
  for (let item in obj) {
    if (obj[item] > max) {
      max = obj[item];
      char = item;
    }
  }
  return char;
}

console.log(maxChar('staaaaaa'));
