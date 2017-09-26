var greeting = Promise.resolve("Hello World!");
var warning = Promise.reject("Tornado Detected!");

greeting.then(console.log);
warning.catch(console.log);