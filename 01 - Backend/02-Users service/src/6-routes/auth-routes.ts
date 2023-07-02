import express, { Request, Response, NextFunction } from "express";
import { UserModel } from "../2-models/user-model";
import authService from "../5-services/auth-service";
import CredentialsModel from "../2-models/credentials-model";
import { UploadedFile } from "express-fileupload";

const router = express.Router();


router.post("/register", async (request:Request, response:Response, next:NextFunction)=>{
    try{
        
        // Take image if exist:
        const imageFiles = request.files?.images as UploadedFile[];    

        const data = new UserModel(request.body);
        
        const user = await authService.register(data,imageFiles);
                
        response.status(201).json(user);
        
    }catch(err:any){
        
        next(err);

    }
});

router.post("/login", async (request:Request, response:Response, next:NextFunction)=>{
    try{
        const credentials = new CredentialsModel(request.body);
        
        const user = await authService.login(credentials);
        
        response.status(201).json(user);

    }catch(err:any){
        
        next(err);

    }
});

export default router;