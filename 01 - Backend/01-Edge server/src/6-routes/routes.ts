import axios from "axios";
import express, { Request, Response, NextFunction } from "express";
import appConfig from "../4-utils/app-config";
import usersService from "../5-services/users-service";

const router = express.Router();


router.post("/register", async (request:Request, response:Response, next:NextFunction)=>{
    try{ 
        const token = await usersService.register();
        response.status(201).json(token);
    }catch(err:any){
        next(err);
    }
});

router.post("/login", async (request:Request, response:Response, next:NextFunction)=>{
    try{
        const token = await usersService.login();
        response.status(201).json(token);
    }catch(err:any){
        next(err);
    }
});

router.get("/users", async (request:Request, response:Response, next:NextFunction)=>{
    try{
        const users = await usersService.getAllUsers();
        response.status(201).json(users);
    }catch(err:any){
        next(err);
    }
});


export default router;