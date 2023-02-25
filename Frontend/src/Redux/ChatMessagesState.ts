import { createStore } from "redux";
import MessageModel from "../Models/MessageModel";

// 1. Global Chat State:
export class ChatState {
    public messages: MessageModel[] = [];
}

// 2. Chat Action Type:
export enum ChatActionType {
    fetchMessages,
    addMessage
}

// 3. Auth Action:
export interface ChatAction {
    type: ChatActionType;
    payload: any;
}

// 4. Auth Reducer: 
export function ChatReducer(currentState = new ChatState(), action: ChatAction): ChatState {

    // Create a new state: 
    const newState = { ...currentState };

    // Perform the needed action: 

    switch (action.type) {

        case ChatActionType.fetchMessages: // Here, the payload is fetched messages history
            newState.messages = action.payload;
            break;

        case ChatActionType.addMessage: // Here, the payload is new online user
            newState.messages.push(action.payload);
            break;

    }

    // Return new state: 
    return newState;
}

// 5. Auth Store:
export const ChatStore = createStore(ChatReducer);