import express, { Request, Response, NextFunction } from "express";
import appConfig from "../4-utils/app-config";
import jwtConstructor from "../4-utils/jwt-constructor";

const router = express.Router();
const UserServiceProxy = require('express-http-proxy');

// Register http://localhost:4000/auth/register ==> http://localhost:4001/api/register
router.post("/register", async (request: Request, response: Response, next: NextFunction) => {
    
    const registerProxy = UserServiceProxy(appConfig.register, {
        limit: "20mb",
        userResDecorator: async (proxyRes, proxyResData, userReq, userRes) => { 
            
            try{
                const user = JSON.parse(proxyResData.toString('utf8')); // Get user object from service response
                const token = await jwtConstructor.createToken(user); // Create token from given user
                return token;
            }catch(e){
                return proxyResData; // If response was string(probably its error), pass it to client
            }
 
    }});

    registerProxy(request, response, next);
    
});


// Login http://localhost:4000/auth/login ==> http://localhost:4001/api/login
router.post("/login", async (request: Request, response: Response, next: NextFunction) => {
    
    const loginProxy = UserServiceProxy(appConfig.login, {
        limit: "20mb",
        userResDecorator: async (proxyRes, proxyResData, userReq, userRes) => { 
            
            try{
                const user = JSON.parse(proxyResData.toString('utf8')); // Get user object from service response
                const token = await jwtConstructor.createToken(user); // Create token from given user
                return token;
            }catch(e){
                return proxyResData; // If response was string(probably its error), pass it to client
            }
 
    }});

    loginProxy(request, response, next);
    
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