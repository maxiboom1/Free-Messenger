import express from "express";
import cors from "cors";
import authRoutes from "./6-routes/edge-auth-routes";
import usersRoutes from "./6-routes/edge-user-routes";
import routeNotFound from "./3-middleware/route-not-found";
import catchAll from "./3-middleware/catch-all";
import appConfig from "./4-utils/app-config";
import expressFileUpload from "express-fileupload";
import { createProxyMiddleware } from 'http-proxy-middleware';

// For HTTP requests
const server = express();

server.use(cors());
server.use("/auth", authRoutes);
server.use("/users", usersRoutes);
server.use(express.json());
server.use(expressFileUpload()); //Get files into request.files
server.use(routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, () => console.log("Listening on http://localhost:" + appConfig.port));


// Separated server for ws proxy communications
const wsProxy = express();
wsProxy.use(createProxyMiddleware({ target: 'http://127.0.0.1:8999', ws: true }));
wsProxy.listen(8888, ()=> console.log("ws started"));