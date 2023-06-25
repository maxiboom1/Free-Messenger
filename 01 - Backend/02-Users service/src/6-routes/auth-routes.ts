import express, { Request, Response, NextFunction } from "express";
import { UserModel } from "../2-models/user-model";
import authService from "../5-services/auth-service";

const router = express.Router();


router.post("/register", async (request:Request, response:Response, next:NextFunction)=>{
    try{
        
        const data = new UserModel(request.body);
        
        const user = await authService.register(data);
                
        response.status(201).json("register token from auth service");
    }catch(err:any){
        
        next(err);

    }
});

router.post("/login", async (request:Request, response:Response, next:NextFunction)=>{
    try{
        response.status(201).json("login token from auth service");

    }catch(err:any){
        
        next(err);

    }
});

export default router;