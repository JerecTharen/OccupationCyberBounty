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
import Home from './Home/Home';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.setSiteTitle = (title)=>{
      this.setState({
        SiteTitle: title,
      });
    }
  }

  state = {
    SiteTitle: "",
  };

  render (){
    return(
      <div className="App">
        <div id="AppContent">
          <Logo title={this.state.SiteTitle}></Logo>
          <Router>
            {/*Navigation will go here*/}
            <Switch>
              <Route exact path="/">
                <Home setTitle={this.setSiteTitle}></Home>
              </Route>
              <Route path="/About">
                <About setTitle={this.setSiteTitle}></About>
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
