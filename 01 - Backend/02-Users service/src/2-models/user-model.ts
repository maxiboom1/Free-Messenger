import mongoose from "mongoose";

// 1. Interface representing our model:
export interface IUserModel extends mongoose.Document {
    firstName: string;
    lastName: string;
    nickName: string;
    email:string;
    motto: string;
    password:string;
    unread: string[];
    role:number;  
}

// 2. Schema built on the interface, containing more things:
export const UserSchema = new mongoose.Schema<IUserModel>({
  
  firstName: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Missing lname."],
    minlength: [2, "lname too short."],
    maxlength: [30, "lname too long."],
    },
  
  lastName: {
    type: String,
    trim: true,
    unique: true,
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
    unique: true,
    required: [true, "Missing motto."],
    minlength: [2, "Motto too short."],
    maxlength: [100, "Motto too long."],
  },

  password: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Missing password."],
    minlength: [8, "password too short."],
    maxlength: [30, "password too long."],
  },

  unread: {
    type: [String],
    default: [],
  },

  role: {
    type: Number,
    required: [true, "Missing stock."],
    min: [0, "Stock can't be negative."],
    max: [1000, "Stock can't exceed 1000."]
  }

}, 
{
    versionKey: false // Cancel auto created version property
});

// 3. Model - The final class:
export const UserModel = mongoose.model<IUserModel>("UserModel", UserSchema, "users"); // Model name, Schema, collection name