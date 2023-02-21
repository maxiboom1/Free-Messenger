import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <Routes>

            {/* Home Page: */}
            <Route path="/main" element= {<Main />} />

        </Routes>
    );
}

export default Routing;
