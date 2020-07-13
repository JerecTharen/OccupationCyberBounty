//React Stuff
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//Site Content
import './App.css';
//Components
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Bounties from './Components/Bounties/Bounties';

const App = () => {

  return(
    <div className="App">
      <div id="AppContent">
        <Router>
          <div id="NavBar">
            <Link to="/">Home</Link>
            <Link to="/Bounties">Bounties</Link>
            <Link to="/About">About</Link>
          </div>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/Bounties">
              <Bounties></Bounties>
            </Route>
            <Route path="/About">
              <About></About>
            </Route>
          </Switch>
        </Router>
      </div>
      
      <div id="AppFooter">
        <a href="https://fontawesome.com/license" target="_blank">License for Site Logo from Font Awesome</a>
      </div>
    </div>
  )
}

export default App;
