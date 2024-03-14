import './App.css';
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Footer } from './components/Footer';

function App() {
    return (
        <div>
            <NavigationBar />
            <Banner />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
