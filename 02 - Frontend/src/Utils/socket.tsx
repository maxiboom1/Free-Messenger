import { createContext } from "react";
import io from "socket.io-client";
import { MessageModelWithUsernames } from "../Models/MessageModel";
import { ChatActionType, chatStore } from "../Redux/ChatMessagesState";
import appConfig from "./AppConfig";

export const socket = io(appConfig.backendUrl);

socket.on("message_ack", async (msg: MessageModelWithUsernames) => { 
  chatStore.dispatch({type:ChatActionType.addMessage, payload: msg});
});

socket.on("new_message", async (msg: MessageModelWithUsernames) => { 

  // Check if active chat partner == recipient id

  chatStore.dispatch({type:ChatActionType.addMessage, payload: msg});
});
  
export const SocketContext = createContext(socket);