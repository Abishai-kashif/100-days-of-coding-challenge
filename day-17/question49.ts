// function using rest Parameters:

// define a func that accept multiple hobbies as argument
let printHobby = (...hobbies: string[]): void => {
    // loops through the hobbies
    hobbies.forEach((hobby: string) => {
         //log each hobby.
        console.log(`I enjoy ${hobby}.`)
    });
};

// Calls the function with some hobbies
printHobby("coding" ,"computering" ,"fighting" ,"learning" ,"applying");
