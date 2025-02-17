const WebSocket = require('ws');

const serverAdress = 'wss://colour-project.glitch.me/';

const ws = new WebSocket(serverAdress, {
    Headers: {
        "user-agent": "Custom WS client"
    }
});

ws.on('open', function() {
    ws.send("Hello Server!");
});

ws.on('message', function(msg)  {
    console.log("Recived msg from server: " + msg);
});