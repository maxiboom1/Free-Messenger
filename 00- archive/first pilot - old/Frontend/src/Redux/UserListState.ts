import { createStore } from "redux";
import UserListModel from "../Models/UserListModel";

// 1. Global Auth State:
export class UserListState {
    public users: UserListModel[] = [];
}

// 2. Auth Action Type:
export enum UserListActionType {
    addAllUsers,
    addUser,
    removeUser
}

// 3. Auth Action:
export interface UserListAction {
    type: UserListActionType;
    payload: any;
}

// 4. Auth Reducer: 
export function UserListReducer(currentState = new UserListState(), action: UserListAction): UserListState {

    // Create a new state: 
    const newState = { ...currentState };

    // Perform the needed action: 

    switch (action.type) {

        case UserListActionType.addAllUsers: // Here, the payload is new online user
            newState.users = action.payload;
            break;

        case UserListActionType.addUser: // Here, the payload is new online user
            newState.users.push(action.payload);
            break;

        case UserListActionType.removeUser: // Here, the payload is offline user and we delete it from users state
            const indexToDelete = newState.users.findIndex(user => user.userId === action.payload.userId);
            if(indexToDelete >= 0){
                newState.users.splice(indexToDelete,1)
            }
            break;


    }

    // Return new state: 
    return newState;
}

// 5. Auth Store:
export const usersStore = createStore(UserListReducer);