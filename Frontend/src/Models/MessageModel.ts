class MessageModel {

    public messageId: number;
    public messageDate: string;
    public messageBody: string;
    public senderUserId: number;
    public recipientUserId: number;

}

// For joined message data with usernames of sender and recipient.
export class MessageModelWithUsernames {

    public messageId: number;
    public messageDate: string;
    public messageBody: string;
    public sender: number;
    public recipient: number;

}


export default MessageModel;
