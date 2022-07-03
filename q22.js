// Explain the difference between undefined and not defined in JavaScript 

// In JavaScript if you try to use a variable that doesn't exist and has not been declared, then JavaScript will throw an error var name is not defined and the script will stop execute thereafter. But If you use typeof undeclared_variable then it will return undefined.

var x; // declaring x
console.log(x); //output: undefined
if(typeof x === 'undefined') // Will return true

console.log(y);  // Output: ReferenceError: y is not defined
