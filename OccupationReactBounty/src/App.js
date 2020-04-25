//React Stuff
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
//Site Content
import TitleBar from './Components/TitleBar/TitleBar.js';
import './App.css';
//Components
import About from './Components/About/About';
import Home from './Components/Home/Home';

const App = () => {

  const history = useHistory();

  const returnHome = ()=>{
    history.push("/home");
  }

  return(
    <div className="App">
      <div id="AppContent">
        <Router>
          {/*Navigation will go here*/}
          <Switch>
            <Route exact path="/">
              <TitleBar title={"Home"} goHome={returnHome}></TitleBar>
              <Home></Home>
            </Route>
            <Route path="/About">
              <TitleBar title={"About"} goHome={returnHome}></TitleBar>
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
