// Explain difference between the await keyword and the yield keyword? 

// yield can be considered to be the building block of await. yield takes the value it's given and passes it to the caller. The caller can then do whatever it wishes with that value (1). Later the caller may give a value back to the generator (via generator.next()) which becomes the result of the yield expression (2), or an error that will appear to be thrown by the yield expression (3).

// async-await can be considered to use yield. At (1) the caller (i.e. the async-await driver - similar to the function you posted) will wrap the value in a promise using a similar algorithm to new Promise(r => r(value) (note, not Promise.resolve, but that's not a big deal). It then waits for the promise to resolve. If it fulfills, it passes the fulfilled value back at (2). If it rejects, it throws the rejection reason as an error at (3).

// So the utility of async-await is this machinery that uses yield to unwrap the yielded value as a promise and pass its resolved value back, repeating until the function returns its final value.