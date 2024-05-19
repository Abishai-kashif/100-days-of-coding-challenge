// JavaScript has runtime model based on event loop, which is responsible for executing our code, proccessing our tasks
//  & completion of tasks.

// example:

console.log("berfore Time out !"); // this will to the stack imediately & being processed completely.

setTimeout(() => console.log("My message is processed !"), 0); // this will be added to the queue after 0 seconds

console.log("After Time out !");

// Even though the timeout is 0 seconds, "My message is processed !" is logged after "After Time out !".
