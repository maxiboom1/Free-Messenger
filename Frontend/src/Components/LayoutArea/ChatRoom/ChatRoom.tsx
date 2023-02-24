import "./ChatRoom.css";
import { useEffect, useState } from "react";
import usersService from "../../../Services/UsersService";


function ChatRoom(): JSX.Element {
    
     useEffect(() => {
        (async ()=>{
            const users = await usersService.getAllUsers();
            console.log(users);
        })()

    },[])

    return (
        <div className="ChatRoom">
			chatroom!
        </div>
    );
}

export default ChatRoom;
