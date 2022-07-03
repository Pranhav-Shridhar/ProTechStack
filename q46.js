// What is the new keyword in JavaScript? 

// It creates a new object. The type of this object is simply object.
// It sets this new object's internal, inaccessible, [prototype] (i.e.__proto__) property to be the constructor function's external, accessible, prototype object (every function object automatically has a prototype property).
// It makes the this variable point to the newly created object.
// It executes the constructor function, using the newly created object whenever this is mentioned.
// It returns the newly created object, unless the constructor function returns a non-null object reference. In this case, that object reference is returned instead.
// Consider:


function New(func) {
    var res = {};
    if (func.prototype !== null) {
        res.__proto__ = func.prototype;
    }
    var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
    if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
        return ret;
    }
    return res;
}