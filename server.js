const WebSocket = require('ws');
const express = require('express');

const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`HTTP server running on port ${PORT}`);
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log('Received:', message);
    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        console.log('Broadcasting to client:', message);
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log(`WebSocket server is running on ws://localhost:${PORT}`);