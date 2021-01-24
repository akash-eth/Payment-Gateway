const http = require("http");
const { Socket } = require("dgram");

var server = http.createServer();

//Step-2: creating a listener using to listen the request at the port 3000:
server.on("connection", (socket) => {       // server.on takes 2 args: 1) "connection"- by default    2) (socket)
    console.log("New connection established");
})

// Step-1: creating a port:
server.listen(3000);

console.log("Listening at port 3000...")