// How to compare two objects in JavaScript? 

// Two non-primitive values, like objects (including function and array) held by reference, so both == and === comparisons will simply check whether the references match, not anything about the underlying values.

// For example, arrays are by default coerced to strings by simply joining all the values with commas (,) in between. So two arrays with the same contents would not be == equal:


var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";

a == c;		// true
b == c;		// true
a == b;		// false