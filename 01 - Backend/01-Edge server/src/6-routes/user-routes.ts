import express, { Request, Response, NextFunction } from "express";
import appConfig from "../4-utils/app-config";

const router = express.Router();
const UserServiceProxy = require('express-http-proxy');


// GET http://localhost:4000/profileImage/:imageName and route request to users-service
router.get("/profileImage/:profileImageName", async (request: Request, response: Response, next: NextFunction) => {
    
    const getProfileImageProxy = UserServiceProxy(appConfig.profileImageUrl); 
    getProfileImageProxy(request, response, next);
    
});

export default router;