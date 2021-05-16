// Write a function that returns the sum of two numbers.
// Write a function that returns the sum of all numbers regardless of # of params.
// Example

// For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.

function add(...args) {
  return args.reduce((a, b) => a + b, 0);
}
