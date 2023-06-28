import { ValidationError } from "../2-models/client-errors";
import { IUserModel } from "../2-models/user-model";


async function register(user:IUserModel): Promise<string> {
    
    const err = user.validateSync();
    
    if(err) throw new ValidationError(err.message);
    // KEEP WORK HERE...
    return "yes";
}

async function login(): Promise<string> {
    return null;
}

export default {
    register,
    login
};