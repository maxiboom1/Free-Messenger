import { createContext } from "react";
import io from "socket.io-client";
import appConfig from "./AppConfig";

export const socket = io(appConfig.backendUrl + appConfig.socketPort);
export const SocketContext = createContext(socket);