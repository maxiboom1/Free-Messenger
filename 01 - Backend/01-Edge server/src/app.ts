import express from "express";
import cors from "cors";
import dataRoutes from "./6-routes/app-routes";
import routeNotFound from "./3-middleware/route-not-found";
import catchAll from "./3-middleware/catch-all";
import appConfig from "./4-utils/app-config";
import expressFileUpload from "express-fileupload";


const server = express();

server.use(cors());
server.use(express.json());
server.use(expressFileUpload()); //Get files into request.files
server.use("/api", dataRoutes);
server.use(routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, () => console.log("Listening on http://localhost:" + appConfig.port));
