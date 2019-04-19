import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Ar from "./components/Ar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Menu";
import Feed from "./components/Feed";
import HomeButton from "./components/Homebutton";
import ActivityDetailed from "./components/ActivityDetailed";
import { AppProvider } from "./context";

class App extends Component {
  render() {
    return (
      <AppProvider>
        <div className="band">
          <div id="App">
            <Sidebar
              disableAutoFocus
              pageWrapId={"page-wrap"}
              outerContainerId={"App"}
            />
            <div className="content" id="page-wrap">
              <Navbar />
              <div id="page-component">
                <Switch>
                  <Route exact={true} path="/ar" component={Ar} />
                  <Route exact={true} path="/" component={Feed} />
                  <Route path="/:handle" component={ActivityDetailed} />
                </Switch>
              </div>
            </div>
          </div>
          <HomeButton />
        </div>
      </AppProvider>
    );
  }
}

export default App;
