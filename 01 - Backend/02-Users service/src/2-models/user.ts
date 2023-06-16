import mongoose from "mongoose";

// 1. Interface representing our model:
export interface IUserModel extends mongoose.Document {
    firstName: string;
    lastName: string;
    nickName: string;
    email: string;
    motto: string;
    password: string;
    role: number;
}

// 2. Schema built on the interface, containing more things:
export const UserSchema = new mongoose.Schema<IUserModel>({

    firstName: {
        type: String,
        trim: true,
        required: [true, "Missing fname."],
        minlength: [2, "Name too short."],
        maxlength: [30, "Name too long."],
    },

    lastName: {
        type: String,
        required: [true, "Missing lname."],
        minlength: [2, "lname too short."],
        maxlength: [30, "lname too long."]
    },

    nickName: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "Missing nickname."],
        minlength: [5, "Nickname too short."],
        maxlength: [20, "Nickname too long."],
    },   

    email: {
        type: String,
        required: [true, "Missing email."],
        min: [8, "Email too short."],
        max: [30, "Email too long."]
        },

    motto: {
        type: String,
        max: [150, "Motto too long."]
    },

    password: {
        type: String,
        required: [true, "Missing password."],
        min: [8, "Password too short."],
        max: [20, "Password too long."]
    },

    role: {
        type: Number,
    }

    }, 
    
    {versionKey: false} // Cancel auto created version property

);

// 3. Model - The final class:
export const UserModel = mongoose.model<IUserModel>("UserModel", UserSchema, "users"); // Model name, Schema, collection name
  
  