// let myNum = Number(prompt('Your age?'));

// if (Number.isNaN(myNum)) {
//   console.log('error');
// }

for (let i = 20; ; i++) {
  if (i % 7 === 0) {
    console.log(i);
    break;
  }
}

// let res = '';
// let counter = 0;
// while (counter < 7) {
//   res = res + '#';
//   counter++;
//   console.log(res);
// }

// function chessboard(size) {
//   let res = '';

//   for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//       if ((i + j) % 2 === 0) {
//         res += ' ';
//       } else {
//         res += '#';
//       }
//     }
//     res += '\n';
//   }
//   return res;
// }

// console.log(chessboard(8));

// const humus = function (factor) {
//   const ingredient = function (amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//       unit += 's';
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//   };
//   ingredient(1, 'can', 'chickpeas');
//   ingredient(0.25, 'cup', 'tahini');
//   ingredient(0.25, 'cup', 'lemon juice');
//   ingredient(1, 'clove', 'garlic');
//   ingredient(2, 'tablespoon', 'olive oil');
//   ingredient(0.5, 'teaspoon', 'cumin');
// };

// humus(3);

// const power = (base, exponent) => {
//   let result = 1;
//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }
//   return result;
// };

// function power(base, exponent) {
//   if (exponent === 0) {
//     return 1;
//   }
//   return base * power(base, exponent - 1);
// }

// console.log(power(2, 2));

// function findSolution(target) {
//   function find(current, history) {
//     if (current === target) {
//       return history;
//     } else if (current > target) {
//       return null;
//     } else {
//       return (
//         find(current + 5, `(${history} + 5)`) ||
//         find(current * 3, `${history} * 3`)
//       );
//     }
//   }
//   return find(1, '1');
// }

// console.log(findSolution(24));

// function farmInventory(cows, chickens) {
//   let cowString = String(cows);
//   while (cowString.length < 3) {
//     cowString = '0' + cowString;
//   }
//   console.log(`${cowString} Cows`);

//   let chickensString = String(chickens);
//   while (chickensString.length < 3) {
//     chickensString = '0' + chickensString;
//   }
//   console.log(`${chickensString} Chickens`);
// }

// farmInventory(3, 68);

// function countLetters(str, letter) {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) counter++;
//   }
//   return counter;
// }

// console.log(countLetters('testBBB', 't'));

// function remove(array, index) {
//   return array.slice(0, index).concat(array.slice(index + 1));
// }
// console.log(remove([1, 2, 3, 4, 5], 2));

function range(start, end, step = 1) {
  let res = [];
  if (step < 0) {
    for (let i = start; i >= end; i += step) {
      res.push(i);
    }
  }
  for (let i = start; i <= end; i += step) {
    res.push(i);
  }
  return res;
}

function sum(input) {
  if (input.length === 0) {
    return 0;
  }
  return input[0] + sum([...input.slice(1)]);
}

// console.log(range(1, 10, 2));
// console.log(range(5, 2, -1));

// console.log(sum(range(10, 20)));
// console.log(sum([2, 2, 2, 2]));

function reverseArray(array) {
  let res = [];
  for (let i = array.length - 1; i >= 0; i--) {
    res.push(array[i]);
  }
  return res;
}

// console.log(reverseArray([1, 2, 3, 4]));

// function deepCompare(obj1, obj2) {
//   if (obj1 === null || obj2 === null) return false;
//   if (Array.isArray(obj1) || Array.isArray(obj2)) return false;
//   if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

//   let objA = Object.keys(obj1);
//   let objB = Object.keys(obj2);

//   if (objA.length !== objB.length) return false;

//   let res = [];
//   for (let item in obj1) {
//     if (typeof obj1[item] === 'object') {
//       return deepCompare(obj1[item], obj2[item]);
//     }
//     if (obj1[item] == obj2[item]) {
//       res.push(true);
//     } else {
//       res.push(false);
//     }
//   }
//   return res.every((el) => el === true);
// }

// console.log(
//   deepCompare(
//     {
//       name: 'matija',
//       age: 30,
//       work: {
//         current: false,
//       },
//       city: 'aalen',
//     },
//     {
//       name: 'matija',
//       age: 30,
//       work: {
//         current: false,
//       },
//       city: 'aalen',
//       status: 'online',
//     }
//   )
// );

// for (let i = 0; i <= 10; i++) {
//   if (i == 5) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// function greatherThan(n) {
//   return (m) => m > n;
// }

// const greatherThan10 = greatherThan(10);
// console.log(greatherThan10(11));

// function noisy(f) {
//   return (...args) => {
//     console.log('caling with args ' + args);
//     let result = f(...args);
//     console.log(`caled with ${args} and result is ${result}`);
//   };
// }

// console.log(noisy(Math.min)(1, 2, 3));

function repeat(n, fn) {
  for (let i = 0; i < n; i++) {
    fn(i);
  }
}

// console.log(repeat(3, console.log));

function unless(test, then) {
  if (!test) then();
}

repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, ' is even');
  });
});
