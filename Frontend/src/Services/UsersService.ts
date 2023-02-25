import axios from "axios";
import MessageModel from "../Models/MessageModel";
import { ChatActionType, ChatStore } from "../Redux/ChatMessagesState";
import { UserListActionType, usersStore } from "../Redux/UserListState";
import appConfig from "../Utils/AppConfig";

class UsersService {

  // Get all users on login/register
  public async getAllUsers(): Promise <any>{
    const response = await axios.get<string>(appConfig.getAllUsersUrl);
    const users = response.data;
    usersStore.dispatch({type: UserListActionType.addAllUsers, payload: users});
    return users;
  }

    // Get 2 users chat history on click on specific user
    public async getUsersMessages(userId1: number, userId2: number): Promise <MessageModel[]>{ //create message model to fix it
      const response = await axios.post<MessageModel[]>(appConfig.get2UsersHistory + userId1 + "/" + userId2);
      const messages = response.data;
      ChatStore.dispatch({type:ChatActionType.fetchMessages, payload: messages})
      return messages;

    }

}

const usersService = new UsersService();

export default usersService;