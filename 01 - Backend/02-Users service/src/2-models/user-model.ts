import mongoose from "mongoose";

// 1. Interface representing our model:
export interface IUserModel extends mongoose.Document {
    firstName: string;
    lastName: string;
    nickName: string;
    nickName_lowercase: string;
    email:string;
    motto: string;
    profileImages: string[];
    password:string;
    role:number;  
}

// 2. Schema built on the interface, containing more things:
export const UserSchema = new mongoose.Schema<IUserModel>({
  
  firstName: {
    type: String,
    trim: true,
    required: [true, "Missing lname."],
    minlength: [2, "lname too short."],
    maxlength: [30, "lname too long."],
    },
  
  lastName: {
    type: String,
    trim: true,
    required: [true, "Missing fname."],
    minlength: [2, "Name too short."],
    maxlength: [30, "Name too long."],
  },

  nickName: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Missing nickName."],
    minlength: [2, "nickName too short."],
    maxlength: [15, "nickName too long."],
  },

  nickName_lowercase: {
    type: String,
    trim: true,
    unique: true,
  },

  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Missing email."],
    minlength: [5, "Email too short."],
    maxlength: [40, "Email too long."],
  },

  motto: {
    type: String,
    trim: true,
    required: [true, "Missing motto."],
    minlength: [2, "Motto too short."],
    maxlength: [100, "Motto too long."],
  },

  profileImages: [
    {
      type: String,
      required: true,
    },
  ],

  password: {
    type: String,
    trim: true,
    required: [true, "Missing password."],
    minlength: [8, "password too short."],
  },

  role: {type: Number}

}, 
{
    versionKey: false // Cancel auto created version property
});

// 3. Model - The final class:
export const UserModel = mongoose.model<IUserModel>("UserModel", UserSchema, "users"); // Model name, Schema, collection name
