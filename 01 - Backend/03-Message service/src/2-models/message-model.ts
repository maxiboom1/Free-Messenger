import mongoose from "mongoose";

// 1. Interface representing our model:
export interface IMessageModel extends mongoose.Document {
    timestamp: string;
    sender: string;
    recipient: string;
    body: string;
}

// 2. Schema built on the interface, containing more things:
export const MessageSchema = new mongoose.Schema<IMessageModel>({
  
  timestamp: { type: String, trim: true },
  sender: { type: String, trim: true },
  recipient: { type: String, trim: true },
  body: { type: String, trim: true },

}, 
{
    versionKey: false // Cancel auto created version property
});

// 3. Model - The final class:
export const MessageModel = mongoose.model<IMessageModel>("MessageModel", MessageSchema, "messages"); // Model name, Schema, collection name
