import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom"
import Ar from "./components/Ar"
import Navbar from "./components/Navbar";
import Sidebar from "./components/Menu";
import Feed from "./components/Feed";

class App extends Component {
  render() {
    return (
      <div className="band">
        <div id="App">
          <Sidebar disableAutoFocus pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <div className="content" id="page-wrap">
            <Navbar />
            <div id="page-component">
              <Switch>
                <Route exact={true} path="/ar" component={Ar} />
                <Route exact={true} path="/" component={Feed} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
