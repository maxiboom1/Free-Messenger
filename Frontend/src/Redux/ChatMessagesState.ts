import { createStore } from "redux";
import { MessageModelWithUsernames } from "../Models/MessageModel";

// 1. Global Chat State:
export class ChatState {
    public messages: MessageModelWithUsernames[] = [];
    public activeChatPartner: {id: number, username: string};
}

// 2. Chat Action Type:
export enum ChatActionType {
    fetchMessages,
    addMessage,
    setActiveChatPartner,
    clear
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
        case ChatActionType.setActiveChatPartner: // Here, the payload is new online user
            newState.activeChatPartner = action.payload;
            break;
        case ChatActionType.clear: //clear state
            newState.activeChatPartner = {id:undefined, username:""};
            newState.messages = [];
            break;

    }

    // Return new state: 
    return newState;
}

// 5. Auth Store:
export const chatStore = createStore(ChatReducer);