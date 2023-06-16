import axios from "axios";
import express, { Request, Response, NextFunction } from "express";
import appConfig from "../4-utils/app-config";

const router = express.Router();


router.post("/register", async (request:Request, response:Response, next:NextFunction)=>{
    try{
        const res = await axios.post(appConfig.register, "data");
        const token = res.data;
        response.status(201).json(token);
    }catch(err:any){
        next(err);
    }
});

router.post("/login", async (request:Request, response:Response, next:NextFunction)=>{
    try{
        const res = await axios.post(appConfig.login, "data");
        const token = res.data;
        response.status(201).json(token);
    }catch(err:any){
        next(err);
    }
});

router.get("/users", async (request:Request, response:Response, next:NextFunction)=>{
    try{
        const res = await axios.get(appConfig.users);
        const users = res.data;
        response.status(201).json(users);
    }catch(err:any){
        next(err);
    }
});


export default router;