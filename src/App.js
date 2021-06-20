import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import AboutMe from './components/AboutMe/AboutMe';
import Nav from './components/Nav/Nav';

function App() {
    return (
        <div className="App">
            <Nav />
            <div className="main">
                <HeroSection />
                <AboutMe />
            </div>
            
        </div>
    );
}

export default App;
