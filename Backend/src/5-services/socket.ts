import { Server } from "socket.io";

function socketLogic(){
    
    const io = new Server(3601, { cors: { origin: '*' } });

    io.on("connect", (socket) => {
    
        console.log(`socket ${socket.id} connected`);
        
        socket.on('new_client', (msg) => { // message: {senderId:___, recipientId:___, message: string}
          
          console.log('Client ' + msg + ', with session id: ' + socket.id + ' is now online');
        });

        socket.on('message', (msg) => { // message: {senderId:___, recipientId:___, message: string}
          console.log('message: ' + JSON.stringify(msg));
        });
    
        // upon disconnection
        socket.on("disconnect", (reason) => {
          console.log(`socket ${socket.id} disconnected due to ${reason}`);
        });
      });
    
}

export default socketLogic;
