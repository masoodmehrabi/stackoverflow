const Hapi = require("@hapi/hapi");

let myGlobalSocket;

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      //return "Hello World!";
    },
  });
  await server.start();
  let io = require("socket.io")(server.listener);

  io.on("connection", function (socket) {
    myGlobalSocket = socket;
    console.log("connected");
    socket.on("ping", () => {
      socket.emit("pong");
    });

    // Do all the socket stuff here.
  });

  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();

// ... Tones Of Code !

const someOtherFuncInCode = () => {
  setInterval(() => {
    myGlobalSocket.emit("anyEmit");
  }, 1500);
};

someOtherFuncInCode();
