const http = require('http');
http.createServer((request, response) =>{
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('Hola tripulantes del NRC2244');

    response.end();
}).listen(1337);