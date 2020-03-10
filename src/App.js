import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";

const App = () => {
  return (
      <div className="App">
        <div className="app-wrapper-content">
            <Switch>
                <Route path="/" exact component={StartPage}/>
            </Switch>
        </div>
      </div>
  )
}

export default App;
