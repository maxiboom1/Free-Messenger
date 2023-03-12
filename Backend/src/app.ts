import express from "express";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/router-not-found";
import appConfig from "./4-utils/app-config";
import productsRoute from "./6-routes/messenger-routes";
import authRoute from "./6-routes/auth-routes";
import cors from "cors";
import socketLogic from "./5-services/socket";

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

socketLogic();
