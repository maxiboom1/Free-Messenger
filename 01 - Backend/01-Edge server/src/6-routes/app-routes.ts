import express, { Request, Response, NextFunction } from "express";
import usersService from "../5-services/users-service";
import axios from "axios";
import appConfig from "../4-utils/app-config";
import jwt from "../4-utils/jwt-constructor";


const router = express.Router();


// Auth routes
router.post("/register", async (request:Request, response:Response, next:NextFunction)=>{
    
    try{ 
        
        // Pass request to users service
        const res = await axios.post(appConfig.register, request.body); 
        
        // Extract user
        const user = res.data;

        // Create token 
        const token = await jwt.createToken(user);
        
        console.log(token);

        // Return token to client
        response.status(201).json(token);

    }catch(err:any){
        
        next(err.response || err.message); // In axios errors, the error msg wrapped in response 
    }

});


router.get("/users", async (request:Request, response:Response, next:NextFunction)=>{
    try{
        const users = await usersService.getAllUsers();
        response.status(201).json(users);
    }catch(err:any){
        next(err?.response);
    }
});


export default router;