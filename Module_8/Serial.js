// Serial Execution of Async code
const fs = require('fs');


console.log('First Line');



// let data = fs.readFileSync('File_1.txt');

// console.log('F1 Data ->'+ data);




// let data1 = fs.readFileSync('File_2.txt');

// console.log('F2 Data ->'+ data1);


fs.readFile('File_1.txt' ,cb1)

function cb1(err , data){
    if(err){
        console.log(err);
    }

    console.log("File 1 data -> "+data)
    fs.readFile('File_2.txt' ,cb2)
}



function cb2(err, data){
    if(err){
        console.log(err);
    }

    console.log("File 2 data -> "+data)
    fs.readFile('File_3.txt' ,cb3)
}

// fs line on top func

function cb3(err, data){
    if(err){
        console.log(err);
    }

    console.log("File 3 data -> "+data)
}

