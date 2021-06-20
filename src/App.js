import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import AboutMe from './components/AboutMe/AboutMe';
import Nav from './components/Nav/Nav';
import MyProjects from './components/MyProjects/MyProjects';
import Footer from './components/Footer/Footer';
function App() {
    return (
        <div className="App">
            <Nav />
            <div className="main">
                <HeroSection />
                <AboutMe />
                <MyProjects />
                <Footer />
            </div>
            
        </div>
    );
}

export default App;
