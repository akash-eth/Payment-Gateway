const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', function(err,files) {
//     if (err) console.log("ERROR",err);
//     else console.log("RESULT",files);
// })

// fs.realpath('./', function(err,files) {
//     if(err) console.log("ERROR",err);
//     else console.log("RESULT",files)
// })

fs.realpath('./', (err,files) => {    // we can use arrow function and eliminate the above function keyword !!
    if(err) console.log("ERROR",err);
    else console.log("RESULT",files)
})