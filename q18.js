// What is generator in JS? 

// Generators are functions that can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances. Generator functions are written using  function* syntax. When called initially, generator functions do not execute any of their code, instead of returning a type of iterator called a Generator. When a value is consumed by calling the generator's next method, the Generator function executes until it encounters the yield keyword.

// The function can be called as many times as desired and returns a new Generator each time, however, each Generator may only be iterated once.

function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}