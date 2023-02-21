import { NavLink } from "react-router-dom";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {
    return (
        <div className="AuthMenu">
			<NavLink to="/home">Login</NavLink>
            <NavLink to="/home">Register</NavLink>

        </div>
    );
}

export default AuthMenu;
