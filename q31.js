// Explain Closure in JavaScript 

// A closure is a stack frame that is allocated when a function starts its execution, and not freed after the function returns (as if a 'stack frame' were allocated on the heap rather than the stack!). In JavaScript, you can think of a function reference variable as having both a pointer to a function as well as a hidden pointer to a closure.

function makeAdder(x) {
	// parameter `x` is an inner variable

	// inner function `add()` uses `x`, so
	// it has a "closure" over `x`
	function add(y) {
		return y + x;
	};

	return add;
}

var plusOne = makeAdder( 1 ); // x is 1, plusOne has a reference to add(y)
var plusTen = makeAdder( 10 ); // x is 10

plusOne(3); // 1 (x) + 3 (y) = 4
plusTen(13); // 10 (x) + 13 (y) = 23 