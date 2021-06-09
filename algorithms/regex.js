// console.log(/[0-9]/.test('in 1992'));
// console.log(/\d/.test('1992'));

// "^" -> bilo koji karakter, samo ne taj koji se vec nalazi u setu
//na kraju mozemo staviti i //i; sto nam govori da nam je rehgex case insensitive

// console.log(/[^1]/.test('111111'));
// console.log(/[^1]/.test('1111112'));

let abc = /[ab?c]/;

console.log(abc.test('ab'));

console.log(new Date(2001, 0, 0).getDate());
