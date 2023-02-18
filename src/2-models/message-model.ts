class MessageModel {

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

export default MessageModel;
