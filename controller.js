const socket = new WebSocket('wss://colour-project.glitch.me/');
const colorPicker = document.getElementById('colorPicker');

// Send the selected color to the server
colorPicker.addEventListener('input', (event) => {
  const color = event.target.value;
  socket.send(color);
});