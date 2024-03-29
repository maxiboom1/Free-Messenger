import axios from "axios";
import CredentialsModel from "../Models/CredentialsModel";
import { AuthActionType, authStore } from "../Redux/AuthState";
import { ChatActionType, chatStore } from "../Redux/ChatMessagesState";
import appConfig from "../Utils/AppConfig";



class AuthService {

  // LOGIN
  public async login(credentials: CredentialsModel): Promise <void>{
    const response = await axios.post<string>(appConfig.loginUrl, credentials);
    const token = response.data;
    //authStore.dispatch({type: AuthActionType.Login, payload: token}); 
  }

  //LOGOUT
  public logout(): void {
    authStore.dispatch({type: AuthActionType.Logout});
    chatStore.dispatch({type: ChatActionType.clear, payload: ""});
  }

}

const authService = new AuthService();
export default authService;