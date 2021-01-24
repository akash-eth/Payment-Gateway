const http = require("http");

var server = http.createServer(function(req,res) {
    if(req.url === '/') {
        res.write("Hello World");
        res.end();
    }
    
    // and we can also add:
    if(req.url === '/api/courses') {
        res.write(JSON.stringify(["DSA", "JAVA", "NodeJS"]));
        res.end();
    }


});


server.listen(3000)

console.log("Connecting to port 3000");