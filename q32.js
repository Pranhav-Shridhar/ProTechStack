// What's the difference between .call and .apply? 

// Both .call and .apply are used to invoke functions and the first parameter will be used as the value  this within the function. However, .call takes in comma-separated arguments as the next argument while .apply taking in an array of arguments as the next argument. An easy way to remember this is C for call comma-separated and A for apply an array of arguments.

function add(a, b) {
  return a + b;
}

console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3