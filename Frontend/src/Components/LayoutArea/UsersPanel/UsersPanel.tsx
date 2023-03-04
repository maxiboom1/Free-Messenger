import "./UsersPanel.css";
import { useEffect, useState } from "react";
import UserListModel from "../../../Models/UserListModel";
import { usersStore } from "../../../Redux/UserListState";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import usersService from "../../../Services/UsersService";
import { authStore } from "../../../Redux/AuthState";
import { ChatActionType, chatStore } from "../../../Redux/ChatMessagesState";

function ControlPanel(): JSX.Element {
    
  const [usersList, setUsersList] = useState<UserListModel[]>();
  
  useEffect(()=>{
      
    usersStore.subscribe(()=>{
        setUsersList(usersStore.getState().users);
    });

  },[]);

  async function clickHandler(key:number, activeChatPartnerUsername:string){
    const userId1 = authStore.getState().user.userId;
    const userId2 = key; 
    const chatPartner = {id: userId2, username: activeChatPartnerUsername};
    chatStore.dispatch({type:ChatActionType.setActiveChatPartner, payload: chatPartner});
    await usersService.getUsersMessages(userId1, userId2);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} size="medium">
        <TableBody>
          
          {usersList?.map((user) => (
            <TableRow hover key={user.userId} onClick={key => clickHandler(user.userId , user.username)}>
                <TableCell component="th" scope="row" > {user.username} </TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );

}

export default ControlPanel;
