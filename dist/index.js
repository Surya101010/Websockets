"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocket = require("ws");
const wss = new WebSocket.WebSocketServer({ port: 8081 });
wss.on("connection", function (socket) {
    console.log("connected");
    setInterval(() => { socket.send("hello"); }, 5000);
    socket.on("message", (e) => {
        console.log(e.toString());
    });
});
//# sourceMappingURL=index.js.map