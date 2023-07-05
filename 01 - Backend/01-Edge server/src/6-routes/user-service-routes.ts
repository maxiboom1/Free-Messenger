import express, { Request, Response, NextFunction } from "express";
import appConfig from "../4-utils/app-config";
import jwtConstructor from "../4-utils/jwt-constructor";

const router = express.Router();
const UserServiceProxy = require('express-http-proxy');

// Register
router.post("/register", async (request: Request, response: Response, next: NextFunction) => {
    
    const registerProxy = UserServiceProxy(appConfig.register, {
        
        limit: "20mb",
        
        userResDecorator: async (proxyRes, proxyResData, userReq, userRes) => {
            
            // Get user object from service response
            const user = JSON.parse(proxyResData.toString('utf8'));
            // Create token from given user
            const token = await jwtConstructor.createToken(user);
            
            return token; 
    }});

    registerProxy(request, response, next);
    
});
































// Login 
// router.post("/login", async (request:Request, response:Response, next:NextFunction)=>{
    
//     try{ 
        
//         // Pass login request to users service
//         const res = await axios.post(appConfig.login, request.body); 
        
//         // Extract user
//         const user = res.data;

//         // Create token 
//         const token = await jwt.createToken(user);
        
//         // Return token to client
//         response.status(201).json(token);

//     }catch(err:any){
        
//         next(err.response || err.message); // In axios errors, the error msg wrapped in response 
//     }

// });


export default router;