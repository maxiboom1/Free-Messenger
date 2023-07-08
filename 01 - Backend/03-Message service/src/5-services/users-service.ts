import { IMessageModel } from "../2-models/message-model";


async function getMessageHistory(userId1:string, userId2:string): Promise<IMessageModel> {
    
    //return UserModel.find().exec();
    return null;
}

async function getWallMessages(userId:string): Promise<IMessageModel> {
    
    //return UserModel.find().exec();
    return null;
}

export default {
    getMessageHistory,
    getWallMessages
};

