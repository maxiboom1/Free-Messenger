import express from "express";
import routeNotFound from "./3-middleware/route-not-found";
import catchAll from "./3-middleware/catch-all";
import appConfig from "./4-utils/app-config";
import messageRoutes from"./6-routes/message-routes";
import dal from "./4-utils/dal";
import expressFileUpload from "express-fileupload";
import socketService from "./5-services/socket-io-service";

const server = express();

server.use(express.json());
server.use(expressFileUpload()); //Get files into request.files
server.use("/messages", messageRoutes);
server.use(routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, async () => {
    await dal.connect();
    console.log("Listening on http://localhost:" + appConfig.port);
});


// Create server for socket service:
const httpServer = server.listen(appConfig.socketPort, () => console.log("Socket server listening on http://localhost:" + appConfig.socketPort));

// Start socket service with giver server:
socketService.init(httpServer);