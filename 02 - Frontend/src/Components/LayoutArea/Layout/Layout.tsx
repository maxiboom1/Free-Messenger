import { SocketContext, socket } from "../../../Utils/socket";
import UsersPanel from "../UsersPanel/UsersPanel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        
        <SocketContext.Provider value={socket}>
        
        <div className="Layout">
            <header>
                <Header />
            </header>

            <main>
                <Routing />
            </main>

            <aside>
                <UsersPanel />
            </aside>
            
            <footer>
                <Footer />
            </footer>

        </div>

        </SocketContext.Provider>
    );
}

export default Layout;
