const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) => {
    if (req.url === '/') {
        const indexFile = __dirname + '/client/src/index.html';
        const readStream = fs.createReadStream(indexFile);
        readStream.pipe(res);
    }
});

server.on('error', (err) => {
    throw err;
});

server.listen(8080, '0.0.0.0', () => {
    console.log('server online!');
});