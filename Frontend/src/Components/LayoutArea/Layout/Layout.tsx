import ControlPanel from "../ControlPanel/ControlPanel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>

            <main>
                Main
            </main>

            <aside>
                <ControlPanel />
            </aside>
            
            <footer>
                <Footer />
            </footer>

        </div>
    );
}

export default Layout;
