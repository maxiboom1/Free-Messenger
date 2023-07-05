import express, { Request, Response, NextFunction } from "express";
import usersService from "../5-services/users-service";
import imageHandler from "../4-utils/image-handler";

const router = express.Router();

router.get("/users", async (request:Request, response:Response, next:NextFunction)=>{
    try{
        const users = await usersService.getAllUsers();
        response.status(201).json(users);
    }catch(err:any){
        next(err);
    }
});


// GET http://localhost:4001/profileImage/:image-name.PNG
router.get("/profileImage/:imageName", async (request: Request, response: Response, next: NextFunction) => {
    
    try {
        const imageName = request.params.imageName;
        response.sendFile(imageHandler.getImagePath(imageName));
    }
    
    catch(err: any) {
        next(err);
    }

});

export default router;