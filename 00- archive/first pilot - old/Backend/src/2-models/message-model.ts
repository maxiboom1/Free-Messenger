export class MessageModel {

    public messageId: number;
    public messageDate: string;
    public messageBody: string;
    public senderUserId: number;
    public recipientUserId: number;

    public constructor(user: MessageModel) {
        this.messageId = user.messageId;
        this.messageDate = user.messageDate;
        this.messageBody = user.messageBody;
        this.senderUserId = user.senderUserId;
        this.recipientUserId = user.recipientUserId;
    }

    // TODO: Validation...

}

// For joined message data with usernames of sender and recipient.
export class MessageModelWithUsernames {

    public messageId: number;
    public messageDate: string;
    public messageBody: string;
    public sender: number;
    public recipient: number;

    public constructor(user: MessageModelWithUsernames) {
    this.messageId = user.messageId;
    this.messageDate = user.messageDate;
    this.messageBody = user.messageBody;
    this.sender = user.sender;
    this.recipient = user.recipient;
}
}

export default MessageModel;
