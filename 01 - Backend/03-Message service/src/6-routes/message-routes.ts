import express, { Request, Response, NextFunction } from "express";
import usersService from "../5-services/users-service";

const router = express.Router();

router.get("/messageHistory/:userId1/:userId2", async (request:Request, response:Response, next:NextFunction)=>{
    try{
        const userId1 = request.params.userId1;
        const userId2 = request.params.userId2;
        const users = await usersService.getMessageHistory(userId1,userId2);
        response.status(201).json(users);
    }catch(err:any){
        next(err);
    }
});


export default router;