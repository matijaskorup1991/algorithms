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
