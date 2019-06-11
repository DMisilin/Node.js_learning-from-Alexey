const WebSocket = require('ws');
const url = require('url');
const queryString = require('querystring');
const http = require('http');

const server = http.createServer();
server.listen(40511);

const ws = new WebSocket.Server({ noServer: true });
const users = new WeakMap();

// ws.on('connection' , (socket, request) => {
//     socket.on('message', (message) => {
//         ws.send(message);
//     })
// });
ws.broadcast = broadcast = (data) => {
    ws.clients.forEach(each = (client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
}

server.on('upgrade', (request, socket, head) => {
    const str = request.url.substring(2);
    const userName = queryString.parse(str);

    users.set(socket, str);

    ws.handleUpgrade(request, socket, head, (wsSocket) => {
        ws.emit('connection', wsSocket, request);

    });

    console.log(ws.clients.entries);
    console.log(userName.name);
});

// const webSocketSrever = new ws.Server({ port: 40510 });

// webSocketSrever.on('connection', (socket) => {
//     const date = new Date;
//     const users = new Set;

//     socket.on('message', (message) => {
//         const mess = JSON.parse(message);
//         if (mess.type === 'user') {
//             webSocketSrever.clients.forEach(client => {
//                 client.send(JSON.stringify(mess));
//             })
//             if (mess.type === 'system' && mess.value === 'connected') {
//                 users.add(socket);
//                 console.log(users.size);
//             }
//         }

//         console.log(`${date}: ${message}`);
//     });

//     socket.onclose = () => {
//         console.log(`${date}: Соединение закрыто`);
//     }
// });

