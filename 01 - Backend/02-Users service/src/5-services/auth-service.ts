import { ValidationError } from "../2-models/client-errors";
import RoleModel from "../2-models/role-model";
import { IUserModel } from "../2-models/user-model";
import { MongoError } from "mongodb";
import cyber from "../4-utils/cyber";


async function register(user:IUserModel): Promise<IUserModel> {
    
    // Validate received user data (also checks nickname and email to be uniq)
    const err = user.validateSync();
    if(err) throw new ValidationError(err.message);
    
    // Hash user password
    user.password = cyber.hashPassword(user.password);
    
    // Manually create lowercase copies to avoid users duplicates with different cases
    user.email_lowercase = user.email.toLowerCase();
    user.nickName_lowercase = user.nickName.toLowerCase();

    // Assign user role
    user.role = RoleModel.User;
    
    try{
      
      await user.save();
      user.password = undefined; // Clear password 
      return user;
    }catch(err){
      {
        if (err instanceof MongoError && err.code === 11000) { // MongoError 11000 is duplicate key error
           throw new ValidationError(`Nickname or email is already taken.`);
        }
        // Re-throw the error if it's not a duplicate key error
        throw err;
      }
    }  

}

async function login(): Promise<string> {
    return null;
}

export default {
    register,
    login
};

