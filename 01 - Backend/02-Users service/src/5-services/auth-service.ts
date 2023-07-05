import { ValidationError, UnauthorizedError } from "../2-models/client-errors";
import RoleModel from "../2-models/role-model";
import { IUserModel, UserModel } from "../2-models/user-model";
import { MongoError } from "mongodb";
import cyber from "../4-utils/cyber";
import CredentialsModel from "../2-models/credentials-model";
import imageHandler from "../4-utils/image-handler";
import { UploadedFile } from "express-fileupload";
import appConfig from "../4-utils/app-config";


async function register(user:IUserModel, images:UploadedFile[]): Promise<IUserModel> {
    
    // Validate received user data (also checks nickname and email to be uniq)
    const err = user.validateSync();
        
    if(err) throw new ValidationError(err.message);
    
    let imageNames = [];
    
    // If user sent images - send it and get back it uniq names
    if(images){ imageNames = await imageHandler.saveFile(images); }
    
    // Hash user password
    user.password = cyber.hashPassword(user.password);

    // Save profileImageNames
    user.profileImages = imageNames.map(img=> appConfig.profileImageUrl + img);
    
    // Force lowercase on email
    user.email = user.email.toLowerCase();
    
    // Create lowercase copy of nickname, just for internal needs (to comp)
    user.nickName_lowercase = user.nickName.toLowerCase();

    // Assign user role
    user.role = RoleModel.User;
    
    try{
      // Avoid db save fot testing
      if (!appConfig.debug_mode) await user.save();
      
      return user;
      
    }catch(err){
      {
        console.error(err);
        if (err instanceof MongoError && err.code === 11000) { // MongoError 11000 is duplicate key error
           throw new ValidationError(`Nickname or email is already taken.`);
        }
        // Re-throw the error if it's not a duplicate key error
        throw err;
      }
    }  

}

async function login(credentials: CredentialsModel): Promise<IUserModel> {
    
  credentials.validate();
  credentials.password = cyber.hashPassword(credentials.password);

  // Try to find user with provided pass, and match its email OR nickname with provided emailOrNickname
  const user = await UserModel.findOne({
    password:credentials.password,
    $or:[
      {nickName_lowercase:credentials.emailOrNickname.toLowerCase()},
      {email:credentials.emailOrNickname.toLowerCase()},
    ]
  });
  
  // If we didn't found user, throw err
  if(!user) throw new UnauthorizedError(`Wrong username or password`); 
  
  return user;

}

export default {
    register,
    login
};

