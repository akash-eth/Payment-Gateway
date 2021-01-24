const http = require('http');
const fs = require('fs');
const { RSA_NO_PADDING } = require('constants');

var port = 3000;

var server = http.createServer((req,res) =>{
    res.writeHead(200, {"content-type":"text/html"})
    fs.readFile("index.html", (err, data) => {
        if(err){
            res.write("Something went wrong");
        }
        else{
            res.write(data);
        }
        res.end();
    })
});


server.listen(3000, (error) => {
    if(error){
        console.log("ERROR", error);
    }
    else{
        console.log("Listening on port",port);
    }
})


