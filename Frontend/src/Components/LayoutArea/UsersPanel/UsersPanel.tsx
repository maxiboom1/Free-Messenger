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

function ControlPanel(): JSX.Element {
    
    const [usersList, setUsersList] = useState<UserListModel[]>();
    
    useEffect(()=>{
        
        const unsubscribe = usersStore.subscribe(()=>{
            setUsersList(usersStore.getState().users);
        });

    },[])

    async function clickHandler(key:number){
        const userId1 = authStore.getState().user.userId;
        const userId2 = key; 
        const usersMessages = await usersService.getUsersMessages(userId1, userId2);

    }

      return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} size="medium">
            <TableBody>
              
              {usersList?.map((user) => (
                <TableRow hover key={user.userId} onClick={key => clickHandler(user.userId)}>
                    <TableCell component="th" scope="row" > {user.username} </TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer>
      );

}

export default ControlPanel;
