import "./UsersPanel.css";
import { useEffect, useState } from "react";
import UserListModel from "../../../Models/UserListModel";
import { usersStore } from "../../../Redux/UserListState";

function ControlPanel(): JSX.Element {
    
    const [usersList, setUsersList] = useState<UserListModel[]>();
    
    useEffect(()=>{
        
        const unsubscribe = usersStore.subscribe(()=>{
            setUsersList(usersStore.getState().users);
        });

    },[])

    return (
        <div className="UsersPanel">
			{usersList?.map(u => <li key={u.userId}>{u.username} </li>)}
        </div>
    );
}

export default ControlPanel;
//