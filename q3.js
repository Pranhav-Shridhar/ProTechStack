// <!-- What is the object type? EARLY

// The object type refers to a compound value where you can set properties (named locations) that each holds their own values of any type. -->

var obj = {
	a: "hello world", // property
	b: 42,
	c: true
};

obj.a;		// "hello world", accessed with doted notation
obj.b;		// 42
obj.c;		// true

obj["a"];	// "hello world", accessed with bracket notation
obj["b"];	// 42
obj["c"];	// true