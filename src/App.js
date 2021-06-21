import './App.css';
import Main from './components/Main/Main';
import ContactMe from './components/ContactMe/ContactMe';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/contactme" component={ContactMe}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
