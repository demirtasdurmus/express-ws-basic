import { createServer } from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { app } from './app';

const PORT = process.env.PORT || 3000;
const server = createServer(app);

const ws = new WebSocketServer({ server });

ws.on('connection', (socket: WebSocket) => {
    socket.send('You have successfully connected to the server.');
    socket.on('error', console.error);

    socket.on('message', (data) => {
        socket.send('Hey I received your message' + data);
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
