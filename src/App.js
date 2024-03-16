import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Work from "./components/Work";

const App = () => {
    return (
        <div>
            <NavigationBar isHomePage={ true } />
            <Banner />
            <Projects />
            <Work />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
