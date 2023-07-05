import express from "express";
import cors from "cors";
import authRoutes from "./6-routes/user-auth-routes";
import usersRoutes from "./6-routes/user-routes";

import routeNotFound from "./3-middleware/route-not-found";
import catchAll from "./3-middleware/catch-all";
import appConfig from "./4-utils/app-config";
import expressFileUpload from "express-fileupload";

const server = express();


server.use(cors());

server.use("/auth", authRoutes);

server.use("/users", usersRoutes);

server.use(expressFileUpload()); //Get files into request.files

server.use(express.json());

server.use(routeNotFound);

server.use(catchAll);

server.listen(appConfig.port, () => console.log("Listening on http://localhost:" + appConfig.port));
