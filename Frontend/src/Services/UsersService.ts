import axios from "axios";
import { UserListActionType, usersStore } from "../Redux/UserListState";
import appConfig from "../Utils/AppConfig";

class UsersService {


  // LOGIN
  public async getAllUsers(): Promise <any>{
    const response = await axios.get<string>(appConfig.getAllUsersUrl);
    const users = response.data;
    usersStore.dispatch({type: UserListActionType.addAllUsers, payload: users});
    return users;
  }

}

const usersService = new UsersService();

export default usersService;