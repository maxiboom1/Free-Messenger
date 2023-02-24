import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../../AuthArea/Login/Login";
import ChatRoom from "../ChatRoom/ChatRoom";
import Main from "../Main/Main";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        
        <Routes>
            
            {/* Default Route: */}
            <Route path="/" element={<Navigate to="/main" />} />

            {/* Home Page: */}
            <Route path="/main" element= {<Main />} />
            
            {/* Login Page: */}
            <Route path="/login" element= {<Login />} />

            {/* Login Page: */}
            <Route path="/chatroom" element= {<ChatRoom />} />


        </Routes>
    );
}

export default Routing;
