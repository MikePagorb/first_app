/*const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
 res.statusCode = 200
 res.setHeader('Content-Type', 'text/plain')
 res.end('Hi there!\n')
})
server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`)
})*/

const PORT = process.env.PORT || 3000;
const http = require('http');
const fs = require('fs');
//const hostname = '127.0.0.1'
//const port = 3000
const server = http.createServer((req, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    fs.readFile('./laba12.html', null, (error, data) => {
        if (error) {
            response.writeHead(404);
            response.write('Ooops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
    //res.end('Hi there!\n')
});
server.listen(PORT, () => {
    console.log(`Server running`);
});
