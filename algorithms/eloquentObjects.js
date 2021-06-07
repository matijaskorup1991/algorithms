// function speak() {
//   return `${this.animal}`;
// }

// let obj1 = {
//   animal: 'Rabbit',
// };

// console.log(speak.call(obj1));

// function normalize() {
//   return this.coords.map((el) => el / this.length);
// }

// console.log(
//   normalize.call({
//     coords: [0, 1, 2, 3],
//     length: 5,
//   })
// );

// console.log([1, 2, 3, 4].toString());

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  getFahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  setFahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
}

let temp = new Temperature(22);
console.log(temp.getFahrenheit());
temp.setFahrenheit(86);
console.log(temp.celsius);
