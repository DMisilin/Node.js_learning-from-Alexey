const ws = require('ws');

const webSocketService = new ws.Server({ port: 8080 });

webSocketService.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(message);
    });
    ws.Send('someth');
})