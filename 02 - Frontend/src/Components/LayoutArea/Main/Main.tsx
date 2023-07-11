import { useContext, useEffect } from "react";
import { SocketContext } from "../../../Utils/socket";
import "./Main.css";

function Main(): JSX.Element {
    
    const socket = useContext(SocketContext);
    
    useEffect(() => {

        socket.emit("test", "alex"); 

      }, []);

    return (
        <div className="Main">
            Main        
        </div>
    );
}

export default Main;
