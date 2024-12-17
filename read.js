const fs = require("fs");

// asynchronous operations
fs.readFile("inpu.txt", (error, data) => {
    if(error){
        console.log(error);
        return;
    }
        console.log(data.toString());
        console
    
    
});
console.log("Program Ended");
console.log("I'm a developer");


//synchronous operations
// const data = fs.readFileSync("inpu.txt");

// console.log(data.toString());

// console.log("Program Ended");

/////////////////////////////////////////