// Callback function
// What is a Callback Function?
// In JavaScript, a callback function is a function that is passed into another
// function as an argument. This function can then be invoked at a later stage
// of time.
// Since, in JavaScript, functions are objects, functions can be passed as
// arguments.

// function printFirstName(firstname , cb){
//     console.log(firstname)
//     cb('jobs');
// }



// function printLastName(lastname){
//     console.log(lastname);
// }

// printFirstName("Steve" , printLastName);  // callback





const isEven = (n) => {
    return n%2==0;
}

let printResult = (evenfn , num) => {
    const isNumEven = evenfn(num)
    console.log(`The number ${num} is an Even number ${isNumEven}`)
}

printResult(isEven,9)