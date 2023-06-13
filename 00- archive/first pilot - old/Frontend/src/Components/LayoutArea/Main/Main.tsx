import { useContext, useEffect } from "react";
import { SocketContext } from "../../../Utils/socket";
import "./Main.css";

function Main(): JSX.Element {
    
    const socket = useContext(SocketContext);
    
    useEffect(() => {

        socket.emit("USER_ONLINE", "alex"); 

      }, []);

    return (
        <div className="Main">
            Main        
        </div>
    );
}

export default Main;
