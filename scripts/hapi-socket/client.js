let ioc = require("socket.io-client");
let socket = ioc("ws://127.0.0.1:3000", {});

socket.on("connect", () => {
  console.log(`connect ${socket.id}`);
});

console.log("Loading Socket Client ");
socket.on("pong", function (msg) {
  console.log("YES I HAVE PONG");
});

socket.on("anyEmit", () => {
  console.log("I have anyEmit From Server !");
});

// setInterval(() => {
// // PingServer
//   socket.emit("ping");
// }, 2000);
