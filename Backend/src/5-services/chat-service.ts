import MessageModel, { MessageModelWithUsernames } from "../2-models/message-model";
import UserModel from "../2-models/user-model";
import dal from "../4-utils/dal";

// Get all users from database: 
async function getAllUsers(): Promise<UserModel[]> {

    // Create query: 
    const sql = `SELECT userId, username, isOnline FROM users`;

    // Get all products: 
    const users = await dal.execute(sql);

    
    // Return them:
    return users;
}

async function postMessage(message:MessageModel): Promise<MessageModel>{

    // TODO validation...

    const sql = `INSERT INTO messages VALUES (DEFAULT,current_timestamp(),'${message.messageBody}','${message.senderUserId}','${message.recipientUserId}');`
    
    const postedMessage = await dal.execute(sql);
        
    return postedMessage;
}

async function getTwoUsersMessagesList(userId1: number, userId2: number): Promise<MessageModelWithUsernames[]>{

    // TODO validation...

    const sql = `
    SELECT msg.messageId, msg.messageDate, msg.messageBody, sender.username AS sender, recipient.username AS recipient
    FROM messages msg
    JOIN users sender ON msg.senderUserId = sender.userId
    JOIN users recipient ON msg.recipientUserId = recipient.userId
    WHERE recipient.userId = ${userId1} AND sender.userId = ${userId2}
    UNION
    SELECT msg.messageId, msg.messageDate, msg.messageBody, sender.username AS sender, recipient.username AS recipient
    FROM messages msg
    JOIN users sender ON msg.senderUserId = sender.userId
    JOIN users recipient ON msg.recipientUserId = recipient.userId
    WHERE recipient.userId = ${userId2} AND sender.userId = ${userId1}
    ORDER BY messageDate;
    `
    const twoUsersMessagesList = await dal.execute(sql);
  
    return twoUsersMessagesList;
}


export default {
    getAllUsers,
    postMessage,
    getTwoUsersMessagesList
};
