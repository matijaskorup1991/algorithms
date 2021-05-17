function reverse(str) {
  if (str.length === 1) return str;
  return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
}

// console.log(reverse('matija'));

const isOdd = (v) => v % 2 === 0;

function someRecursive(arr, fn) {
  if (arr.length === 0) return false;
  if (arr[0]) return true;
  return someRecursive(arr.slice(1), fn);
}

// console.log(someRecursive([1, 2, 3, 4], isOdd));

function flatten(arr) {
  let res = [];
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      res = res.concat(flatten(el));
    } else {
      res.push(el);
    }
  });
  return res;
}

console.log(flatten([1, 2, [3], [[4], 5]]));
