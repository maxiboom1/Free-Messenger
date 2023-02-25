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

function ControlPanel(): JSX.Element {
    
    const [usersList, setUsersList] = useState<UserListModel[]>();
    
    useEffect(()=>{
        
        const unsubscribe = usersStore.subscribe(()=>{
            setUsersList(usersStore.getState().users);
        });

    },[])

    console.log(usersList)

      return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
    
            <TableBody>
              {usersList?.map((user) => (
                <TableRow hover key={user.userId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row"> 
                        {user.username}
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );

}

export default ControlPanel;
