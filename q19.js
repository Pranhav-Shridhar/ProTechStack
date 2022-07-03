// What advantages are using arrow functions? 

// Scope safety: Until arrow functions, every new function defined its own value (a new object in the case of a constructor, undefined in strict mode function calls, the base object if the function is called as an "object method", etc.). An arrow function does not create its own this, the this value of the enclosing execution context is used.
// Compactness: Arrow functions are easier to read and write.
// Clarity: When almost everything is an arrow function, any regular function immediately sticks out for defining the scope. A developer can always look up the next-higher function statement to see what this thisObject is.

let hello = () => {
    console.log('hello');
}

hello();