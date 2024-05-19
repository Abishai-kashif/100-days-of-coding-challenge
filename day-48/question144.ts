// Promise.all(iterator) method takes an iterator of Promises as input & returns
// single Promise that is resolved when every Promise in iterator have resolved
// or it resolves when iterator contain no Promises.It is rejected if any of the
// passed object is rejected.

// USE: This method is usefull to aggregrate the results of multiple Promises.

let p1 = new Promise((resolve, reject) => {
	setTimeout(() => resolve("one"), 1000);
});
let p2 = new Promise((resolve, reject) => {
	setTimeout(() => resolve("two"), 2000);
});
let p3 = new Promise((resolve, reject) => {
	setTimeout(() => resolve("three"), 3000);
});
let p4 = new Promise((resolve, reject) => {
	setTimeout(() => resolve("four"), 4000);
});
let p5 = new Promise((resolve, reject) => {
	setTimeout(() => resolve("five"), 5000);
});

// this method takes an iterator of Promises & returns new Promise
// whose resolved value is the resolved values of the promises in iterator
let newPromise = Promise.all([p1, p2, p3, p4, p5]);

// logs the newPromise resolved(aggregrated) vals.
newPromise.then((aggVals) => {
	console.log(aggVals);
});
// this also demonstrates how Promise.all waits for all promises to resolve and then logs the array of their results.

// In this program we learned how to we can aggregrate the result of
// multiple promises using Promise.all() method.
