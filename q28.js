// What is Currying?

// Currying is when you break down a function that takes multiple arguments into a series of functions that take part in the arguments. Here's an example in JavaScript:

function add (a) {
    return function (b) {
      return a + b;
    }
  }

