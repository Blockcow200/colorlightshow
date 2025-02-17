// Connect to the WebSocket server
const socket = new WebSocket('wss://colour-project.glitch.me/');

// Listen for messages from the server
socket.addEventListener('message', (event) => {
  const color = event.data;
  document.body.style.backgroundColor = color;
});

console.log('deployed!')