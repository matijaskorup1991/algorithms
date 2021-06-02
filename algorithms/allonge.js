function slasher(arr, howMany) {
  let newArr = [];
  let start = 0;
  let end = howMany;
  while (start < arr.length) {
    newArr.push(arr.slice(start, end));
    start += howMany;
    end += howMany;
  }
  return newArr[newArr.length - 1][0];
}
// console.log(slasher([1, 2, 3, 4, 5, 6, 7, 8], 2));

const repeat = (num, fn) =>
  num > 0 ? (repeat(num - 1, fn), fn(num)) : undefined;

// repeat(3, function (n) {
//   console.log(`Hallo ${n}`);
// });

function mutate(arr) {
  let or = [...arr[0]];
  let test = [...arr[1]];
  let str = '';
  for (let i = 0; i < arr[0].length; i++) {
    if (test.indexOf(or[i] > -1)) {
      str += test.splice(test.indexOf(or[i]), 1);
    }
  }
  return arr[0].includes(str);
}

// console.log(mutate(['matija', 'mat']));

function bouncer(arr) {
  return arr.filter((x) => x);
}

console.log(bouncer([false, null, '', undefined, 0, NaN, 1, 2, 3, 4]));
