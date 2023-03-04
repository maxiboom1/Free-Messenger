import { createContext } from "react";
import io from "socket.io-client";
import { MessageModelWithUsernames } from "../Models/MessageModel";
import { ChatActionType, chatStore } from "../Redux/ChatMessagesState";
import appConfig from "./AppConfig";

export const socket = io(appConfig.backendUrl + appConfig.socketPort);

socket.on("message_ack", async (msg: MessageModelWithUsernames) => { 
  chatStore.dispatch({type:ChatActionType.addMessage, payload: msg});
  //console.log('Socket reciever: ' + JSON.stringify(chatStore.getState()));
  
});
  
export const SocketContext = createContext(socket);