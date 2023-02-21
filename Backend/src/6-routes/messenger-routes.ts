import express, { Request, Response, NextFunction } from "express";
import MessageModel from "../2-models/message-model";
import verifyLoggedIn from "../3-middleware/verify-logged-in";
import chatService from "../5-services/chat-service";

const router = express.Router(); // Capital R

// GET http://localhost:4000/api/home
router.get("/home", verifyLoggedIn, async (request: Request, response: Response, next: NextFunction) => {
    try {
        console.log('try to get users')
        const users = await chatService.getAllUsers();
        response.json(users);
    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:4000/api/message
router.post("/message", verifyLoggedIn, async (request: Request, response: Response, next: NextFunction) => {
    try {
        console.log('try to post  message')
        const message = new MessageModel(request.body);
        const addedMessage = await chatService.postMessage(message);
        response.status(201).json(addedMessage);
    }
    catch (err: any) {
        next(err);
    }
});


// POST http://localhost:4000/api/message/:userId1:userId2
router.post("/chat/:userId1/:userId2", verifyLoggedIn, async (request: Request, response: Response, next: NextFunction) => {
    try {
        console.log('try to fetch message list. Remote client: ' + request.socket.remoteAddress );
        const userId1 = +request.params.userId1;
        const userId2 = +request.params.userId2;
        const twoUsersMessagesList = await chatService.getTwoUsersMessagesList(userId1, userId2);
        response.json(twoUsersMessagesList);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;
