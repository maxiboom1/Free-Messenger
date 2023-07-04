import express, { Request, Response, NextFunction } from "express";
import usersService from "../5-services/users-service";
import axios from "axios";
import appConfig from "../4-utils/app-config";
import jwt from "../4-utils/jwt-constructor";
import wrapToFormData from "../5-services/form-data-service";

const router = express.Router();


// Register
router.post("/register", async (request:Request, response:Response, next:NextFunction)=>{
    
    try{ 

        const formData = wrapToFormData(request); // Create formdata from request, to pass it to users-service
        
        const config = { headers: {"Content-Type": "multipart/form-data"} }; // Used to accept files as payload 
    
        const res = await axios.post(appConfig.register, formData, config); 
        
        const user = res.data;

        const token = await jwt.createToken(user);
        
        response.status(201).json(token);

    }catch(err:any){
        
        next(err.response || err.message); // In axios errors, the error msg wrapped in response 
    }

});

// Login 
router.post("/login", async (request:Request, response:Response, next:NextFunction)=>{
    
    try{ 
        
        // Pass login request to users service
        const res = await axios.post(appConfig.login, request.body); 
        
        // Extract user
        const user = res.data;

        // Create token 
        const token = await jwt.createToken(user);
        
        // Return token to client
        response.status(201).json(token);

    }catch(err:any){
        
        next(err.response || err.message); // In axios errors, the error msg wrapped in response 
    }

});

// Get users list
router.get("/users", async (request:Request, response:Response, next:NextFunction)=>{
    try{
        const users = await usersService.getAllUsers();
        response.status(201).json(users);
    }catch(err:any){
        next(err?.response);
    }
});


export default router;