import express from "express";
import authRoutes from "./6-routes/auth-routes";
import usersRoutes from "./6-routes/users-routes";

import routeNotFound from "./3-middleware/route-not-found";
import catchAll from "./3-middleware/catch-all";
import appConfig from "./4-utils/app-config";
import dal from "./4-utils/dal";
import expressFileUpload from "express-fileupload";

const server = express();

server.use(express.json());
server.use(expressFileUpload()); //Get files into request.files
server.use(authRoutes);
server.use(usersRoutes);


server.use(routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, async () => {
    await dal.connect();
    console.log("Listening on http://localhost:" + appConfig.port);
});
