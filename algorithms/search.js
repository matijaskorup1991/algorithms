//LINEAR SEARCH:

function linearSearch(arr, el) {
  return arr.indexOf(el);
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7], 5));

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
