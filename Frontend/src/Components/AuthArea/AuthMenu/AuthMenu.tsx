import { NavLink } from "react-router-dom";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {
    
    

    return (
        
        <div className="AuthMenu">
			<span>Welcome, Guest</span>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/">Register</NavLink>

        </div>
    );
}

export default AuthMenu;
