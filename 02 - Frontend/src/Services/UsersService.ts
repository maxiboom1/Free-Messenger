import axios from "axios";
import MessageModel from "../Models/MessageModel";
import UserListModel from "../Models/UserListModel";
import { authStore } from "../Redux/AuthState";
import { ChatActionType, chatStore } from "../Redux/ChatMessagesState";
import { UserListActionType, usersStore } from "../Redux/UserListState";
import appConfig from "../Utils/AppConfig";

class UsersService {

//   // Get all users on login/register
//   public async getAllUsers(): Promise <void> {
//     const response = await axios.get<UserListModel[]>(appConfig.getAllUsersUrl);
//     const users = response.data;
//     usersStore.dispatch({type: UserListActionType.addAllUsers, payload: removeActiveUser(users)});
//   }

//     // Get 2 users chat history on click on specific user
//   public async getUsersMessages(userId1: number, userId2: number): Promise <MessageModel[]>{ //create message model to fix it
//     const response = await axios.post<MessageModel[]>(appConfig.get2UsersHistory + userId1 + "/" + userId2);
//     const messages = response.data;
//     chatStore.dispatch({type:ChatActionType.fetchMessages, payload: messages});
//     return messages;
//   }

// }

// //Utility func to remove active user from users list that he see on page
// function removeActiveUser(users: UserListModel[]):UserListModel[]{
//   const activeUserId = authStore.getState().user.userId;
//   users = users.filter(user => user.userId != activeUserId);
//   return users;
}

const usersService = new UsersService();

export default usersService;