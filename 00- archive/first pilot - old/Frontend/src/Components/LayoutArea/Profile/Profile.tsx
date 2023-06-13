import "./Profile.css";
import { useContext, useEffect, useRef, useState } from "react";
import usersService from "../../../Services/UsersService";
import { authStore } from "../../../Redux/AuthState";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { MessageModelWithUsernames } from "../../../Models/MessageModel";
import { chatStore } from "../../../Redux/ChatMessagesState";
import { SocketContext } from "../../../Utils/socket";

function Profile(): JSX.Element {
    
    const user = authStore.getState().user;
    const [chat, setChat] = useState<MessageModelWithUsernames[]>(); 
    const [messageToSubmit, setMessageToSubmit] = useState<string>();
    const socket = useContext(SocketContext);
    const inputRef = useRef(null);

    useEffect(() => {
        (async ()=>{
            await usersService.getAllUsers(); // it updates redux state and renders them (users component are subscribed to it)
        })();
        
        const unsubscribe = chatStore.subscribe(() => { 
            //setChat(chatStore.getState().messages); => This is wrong
            setChat(chat => [...chatStore.getState().messages]); // This is good
        })

        return () => unsubscribe();
    },[])
    
    function submit(){
        
        
        const messageObj = {
            messageId:0, //it will be overridden in server
            messageDate: new Date(),
            messageBody: messageToSubmit,
            senderUserId: user.userId,
            recipientUserId: chatStore.getState().activeChatPartner.id,
            
            //Those 2 parameters are not part of message model that stored in DB, but part of MessageModelWithUsername, 
            //the server will return in back to client, and with that data we will update redux message state
            sender: user.username,
            recipient: chatStore.getState().activeChatPartner.username
        }

        socket.emit("message", messageObj); // send message to server 
        inputRef.current.value = "";
    }

    return (
        <div className="Profile">
            <h3>Here will be personal page</h3>
            <h4>Chat (will migrate to its own instance - this is test):</h4>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100 }} size="medium">
                    <TableBody>
                     
                        {chat?.map((chatMessage) => (
                            <TableRow hover key={chatMessage.messageId}>
                                <TableCell component="th" scope="row" ><b>{chatMessage.sender}:</b> {chatMessage.messageBody} </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
            
            <div className="send">
                
                <input onChange={(e)=>setMessageToSubmit(e.target.value)} ref={inputRef} type="text" />
                <button onClick={submit}>Send</button>
            </div>
            
        </div>

        
    );
}

export default Profile;
