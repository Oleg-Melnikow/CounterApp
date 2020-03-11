import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import CounterContainer from "./components/Counter/CounterContainer";

const App = () => {
  return (
      <div className="App">
        <div className="app-wrapper-content">
            <Switch>
                <Route path="/" exact component={StartPage}/>
                <Route path="/counter" exact component={CounterContainer}/>
            </Switch>
        </div>
      </div>
  )
}

export default App;
