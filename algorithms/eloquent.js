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

function countLetters(str, letter) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) counter++;
  }
  return counter;
}

console.log(countLetters('testBBB', 't'));
