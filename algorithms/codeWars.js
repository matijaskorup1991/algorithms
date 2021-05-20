// Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation.
// Lowercase characters can be numbers. If method gets number, it should return string.

function toUnderscore(str) {
  if (typeof str === 'number') return String(str);
  let regEx = /[A-Z]/g;
  let res = str.replace(regEx, (el) => `_${el.toLowerCase()}`);
  return res.substring(1);
}

console.log(toUnderscore('TestController'));
