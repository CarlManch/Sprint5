const op= require('./operaciones');
"use strict";
var http = require("http");

var server = http.createServer(function(req, res){
    res.writeHead(200, {"content-type": "text/plain"});
    res.end("Hola NRC2244");
});
//console.log("el resultado es",op.suma(4,5));
console.log("El nombre es:",op.getNombre());
server.listen(8080);
