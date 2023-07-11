import jwtDecode from "jwt-decode";
import { createStore } from "redux";
import UserModel from "../Models/UserModel";

// 1. Global Auth State:
export class AuthState {
    
    public token: string = null;
    public user: UserModel = null;

    // 
    public constructor() {
        this.token = localStorage.getItem("token");
        if(this.token) {
            this.user = jwtDecode<{ user: UserModel }>(this.token).user; // Extract user from token.
        }
    }
}

// 2. Auth Action Type:
export enum AuthActionType {
    Register,
    Login,
    Logout
}

// 3. Auth Action:
export interface AuthAction {
    type: AuthActionType;
    payload?: string;
}

// 4. Auth Reducer: 
export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {

    // Create a new state: 
    const newState = { ...currentState };

    // Perform the needed action: 
    switch (action.type) {

        case AuthActionType.Register: // Here, the payload is a token
        case AuthActionType.Login: // Here, the payload is a token
            newState.token = action.payload;
            newState.user = jwtDecode<{ user: UserModel }>(action.payload).user; // Extract user from token.
            localStorage.setItem("token", newState.token);
            break;

        case AuthActionType.Logout: // Here, we don't have any payload
            newState.token = null;
            newState.user = null;
            localStorage.removeItem("token");
            break;
    }

    // Return new state: 
    return newState;
}

// 5. Auth Store:
export const authStore = createStore(authReducer);