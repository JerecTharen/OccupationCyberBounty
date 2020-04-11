//React Stuff
import React from 'react';
import Component from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//Site Content
import Logo from './Content/Logo.js';
import './App.css';
//Components
import About from './About/About';

export default class App extends Component{

  render (){
    return(
      <div className="App">
        <div id="AppContent">
          <Logo></Logo>
          <Router>
            {/*Navigation will go here*/}
            <Switch>
              <Route exact path="/">
                {/* {props.SiteTitle = "Home"} */}
              </Route>
              <Route path="/About">
                {/* {props.SiteTitle="About"} */}
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
}
