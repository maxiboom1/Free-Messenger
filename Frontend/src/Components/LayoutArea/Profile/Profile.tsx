import "./Profile.css";
import { useContext, useEffect, useState } from "react";
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
    const [message, setMessage] = useState<string>();
    const socket = useContext(SocketContext);

    useEffect(() => {
        (async ()=>{
            const users = await usersService.getAllUsers(); // it updates usersListState and renders them
        })()

        setChat(chatStore.getState().messages);
        
        const unsubscribe = chatStore.subscribe(() => {
            setChat(chatStore.getState().messages);
        })

        return () => unsubscribe();
    },[])

    function submit(){
        
        console.log('You submitted: ' + message);
        
        const messageObj = {
            senderId:user.userId,
            senderUsername: user.username,
            recipientId: chatStore.getState().activeChatPartner.id,
            recipientUsername: chatStore.getState().activeChatPartner.username,
            message: message
        }

        socket.emit("message", messageObj); // send message to server 
    }

    return (
        <div className="Profile">
            <h3>Here will be personal page</h3>
            <h4>Chat (will migrate to its own instance - this is test):</h4>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100 }} size="medium">
                    <TableBody>
                     
                        {chat?.map((msg) => (
                            <TableRow hover key={msg.messageId}>
                                <TableCell component="th" scope="row" ><b>{msg.sender}:</b> {msg.messageBody} </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
            
            <div className="send">
                
                <input onChange={(e)=>setMessage(e.target.value)} type="text" />
                <button onClick={submit}>Send</button>
            </div>
            
        </div>

        
    );
}

export default Profile;
