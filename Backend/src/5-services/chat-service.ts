import MessageModel from "../2-models/message-model";
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

async function getTwoUsersMessagesList(userId1: number, userId2: number): Promise<MessageModel[]>{

    // TODO validation...

    const sql = `
    SELECT * FROM messages WHERE senderUserId = ${userId1} AND recipientUserId = ${userId2}
    UNION
    SELECT * FROM messages WHERE senderUserId = ${userId2} AND recipientUserId = ${userId1}
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
