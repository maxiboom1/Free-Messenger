import { SocketContext, socket } from "../../../Utils/socket";
import ControlPanel from "../ControlPanel/ControlPanel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        
        <SocketContext.Provider value={socket}>
        
        <div className="Layout">
            <header>
                <Header />
            </header>

            <main>
                <Main />
            </main>

            <aside>
                <ControlPanel />
            </aside>
            
            <footer>
                <Footer />
            </footer>

        </div>

        </SocketContext.Provider>
    );
}

export default Layout;
