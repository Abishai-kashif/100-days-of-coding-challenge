"use strict";
// Significance of 'await' keyword in asynchronous JavaScript.
// await:
//     is used to make our code wait for the promise to be settled.
//   it can only be used inside an async function or in top level modules like inquirer.
(async function () {
    console.log("code1....");
    console.log("code2...."); // execute normally
    // using await keyword
    await new Promise((resolve, reject) => {
        // async task
        setTimeout(() => {
            console.log("I run after 2 seconds, and the rest of the code will wait for me.");
            resolve(200);
        }, 2000);
    });
    // will wait for the promise to be resolved
    console.log("code3....");
    console.log("code4....");
})(); //use case of IIFE:we dont need to repeat a spefic task,the onl purpose of defining async func is to use await.
// the significance of 'await' keyword in async JS can be measured throught
// the amount of ease it create for user to code in asyncronous JS:
//  * make our Asyncronous code look and behave a little more like Synchronous code.
//  * solve the problem of callback hells & promise chaining.
//  * make async code easy to read, write & debug.
