import "./Profile.css";
import { useEffect, useState } from "react";
import usersService from "../../../Services/UsersService";
import { authStore } from "../../../Redux/AuthState";


function Profile(): JSX.Element {
    
    const user = authStore.getState().user;
    
    useEffect(() => {
        (async ()=>{
            const users = await usersService.getAllUsers();
        })()

    },[])

    return (
        <div className="Profile">
			<span>Welcome back, {user.firstName}</span>

            <h3>My personal page - here i hold my profile pics, life slogan, and message wall 
                \n(everyone can post messages on my wall - and it will be in public scope)</h3>
        </div>
    );
}

export default Profile;
