// Explain different methods of iteration in Javascript 

// For objects:

// for loops - for (var property in obj) { console.log(property); }. However, this will also iterate through its inherited properties, and you will add a obj.hasOwnProperty(property) check before using it.

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

// Object.keys() - Object.keys(obj).forEach(function (property) { ... }). Object.keys() is a static method that will list all enumerable properties of the object that you pass it.

const object1 = { a: 1, b: 2, c: 3 };

console.log(Object.keys(object1));

// Object.getOwnPropertyNames() - Object.getOwnPropertyNames(obj).forEach(function (property) { ... }). Object.getOwnPropertyNames() is a static method that will list all enumerable and non-enumerable properties of the object that you pass it.

const object1 = { a: 1, b: 2, c: 3 };

console.log(Object.getOwnPropertyNames(object1))

// For arrays:

// for loops - for (var i = 0; i < arr.length; i++). The common pitfall here is that var is in the function scope and not the block scope and most of the time you would want a block-scoped iterator variable. ES2015 introduces let which has block scope and it is recommended to use that instead. So this becomes: for (let i = 0; i < arr.length; i++).
// forEach - arr.forEach(function (el, index) { ... }). This construct can be more convenient at times because you do not have to use them index if all you need is an array of elements. There are also the every and some methods that will allow you to terminate the iteration early.

