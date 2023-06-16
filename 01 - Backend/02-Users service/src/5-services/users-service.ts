import { IUserModel, UserModel } from "../2-models/user";


async function getAllUsers(): Promise<IUserModel[]> {
    return UserModel.find().exec();
}


export default {
    getAllUsers
};

