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

let res = '';
let counter = 0;
while (counter < 7) {
  res = res + '#';
  counter++;
  console.log(res);
}
