import http from "http";
import socketIo, { Server as SocketIOServer, Socket } from "socket.io";

let socketServer: SocketIOServer;

function init(httpServer: http.Server):void{
    
    // Set CORS for socket server:
    const option = { cors: {origin:"*"}};
    
    // Create socket server:
    socketServer = new socketIo.Server(httpServer, option);
     
    // Create listener just for notifying new client connection (the system will work also without it)
    // Here we can manage a list of clients in case we need to reach out to a specific person among them.
    socketServer.sockets.on("connection", (socket: Socket) =>{
        console.log("New client connected on socket id: " + socket.id);
    });

}

// This func will return socketServer, so we can use it anywhere in out app.
function getSocketServer(): SocketIOServer {
    return socketServer;
}

export default {
    init,
    getSocketServer
}