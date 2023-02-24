import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AuthMenu.css";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import authService from "../../../Services/AuthService";
import { UserListActionType, usersStore } from "../../../Redux/UserListState";

function AuthMenu(): JSX.Element {
    
    const [user,setUser] = useState<UserModel>();

    useEffect(() => {

        setUser(authStore.getState().user);

        const unsubscribe = authStore.subscribe(()=>{
            setUser(authStore.getState().user); 
        });

        return () => unsubscribe();

    },[]);

    function logout(): void {
        authService.logout(); // logout  user and delete token
        usersStore.dispatch({type: UserListActionType.addAllUsers, payload: []}); // reset users state (redux)
        alert("Bye Bye...");
    }

    return (
        
        <div className="AuthMenu">
            {!user &&
                <>
                    <span>Hello Guest | </span>
                    <NavLink to="/login">Login</NavLink>
                    <span> | </span>
                    <NavLink to="/register">Register</NavLink>
                </>
            }

            { user && 
                <>
                    <span>Hello {user.firstName} {user.lastName} | </span>
                    <NavLink to="/home" onClick={logout}>Logout</NavLink>
                </>
            }

        </div>
    );
}

export default AuthMenu;


/* <span>Hello {user?.username}</span>
<NavLink to="/login">Login </NavLink>
<NavLink to="/">Register</NavLink> */
