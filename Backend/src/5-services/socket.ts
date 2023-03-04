import { Server } from "socket.io";
import MessageModel, { MessageModelWithUsernames } from "../2-models/message-model";
import chatService from "./chat-service";

const onlineUsers = []; // [{userId:userId, socketId:socket.id}...]

function socketLogic(){
    
    const io = new Server(3601, { cors: { origin: '*' } });

    io.on("connect", (socket) => {
            
        socket.on('new_client', (userId:number) => { 
          
          onlineUsers.push({
            userId:userId,
            socketId:socket.id

          });

          console.log('Online users:' + JSON.stringify(onlineUsers));
        });
        
        socket.on('client_logout', (userId:number) => { 
          const idToRemove = onlineUsers.findIndex(user => user.socketId === socket.id);
          console.log(onlineUsers[idToRemove]?.userId +' will be removed');
          onlineUsers.splice(idToRemove,1);
          console.log(onlineUsers)
        });

        socket.on('message', async (msg:any) => {
          const messageToPost = new MessageModel(msg);
          const returnedMessage = await chatService.postMessage(messageToPost);
          const messageWithUsernames = new MessageModelWithUsernames(msg);
          messageWithUsernames.messageId = returnedMessage.messageId
          socket.emit('message_ack', messageWithUsernames); // Return msg to the client to local chat update
        });
    
        socket.on("disconnect", (reason) => {
          console.log(`socket ${socket.id} disconnected due to ${reason}`);
        });
      });
    
}


export default socketLogic;
