import './App.css';
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div>
            <NavigationBar />
            <Banner />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
