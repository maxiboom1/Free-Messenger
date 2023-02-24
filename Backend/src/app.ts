import express from "express";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/router-not-found";
import appConfig from "./4-utils/app-config";
import productsRoute from "./6-routes/messenger-routes";
import authRoute from "./6-routes/auth-routes";
import { Server } from "socket.io";
import cors from "cors";

// Create server: 
const server = express();

// CORS

server.use(cors({origin:"http://localhost:3000"}));

// Create request.body object if json was sent:
server.use(express.json());

// Route requests:
server.use("/api", productsRoute);
server.use("/api", authRoute);

// Handle route not found: 
server.use(routeNotFound);

// Handle catch-all: 
server.use(catchAll);

// Run server on port 3600:
server.listen(appConfig.port, () => console.log("Listening on http://localhost:" + appConfig.port));

// 
const io = new Server(3601, { cors: { origin: '*' } });

io.on("connect", (socket) => {
    
    console.log(`socket ${socket.id} connected`);
    
    socket.on('USER_ONLINE', (msg) => {
        console.log('message: ' + msg);
        // update mysql here ...?
    });

    // upon disconnection
    socket.on("disconnect", (reason) => {
      console.log(`socket ${socket.id} disconnected due to ${reason}`);
    });
  });






