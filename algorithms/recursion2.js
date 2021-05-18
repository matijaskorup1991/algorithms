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

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

function nestedEvenSum(obj) {
  let res = [];
  for (let item in obj) {
    if (typeof obj[item] === 'object') {
      res = res.concat(nestedEvenSum(obj[item]));
    } else if (typeof obj[item] === 'number') {
      res.push(obj[item]);
    }
  }
  return res.filter((el) => el % 2 === 0).reduce((a, b) => a + b, 0);
}

// console.log(nestedEvenSum(obj1));

let objSource = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

function stringifyNumbers(obj) {
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object') {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

console.log(stringifyNumbers(objSource));
