import express, { Request, Response, NextFunction } from "express";

const router = express.Router();


router.post("/register", async (request:Request, response:Response, next:NextFunction)=>{
    try{
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