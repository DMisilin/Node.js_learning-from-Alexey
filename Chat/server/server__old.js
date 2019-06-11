const http = require('http');
const fs = require('fs');
const path = require('path');

const page = fs.readFileSync('Page.html');

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end(page);
});


server.listen(8000, () => {
    console.log('Server started...');
})

