import React, { Component } from "react";
import logo from "./logo.svg";
import back from "./back-50.png";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Ar from "./components/Ar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Menu";
import Feed from "./components/Feed";
import { ButtonBack, ButtonHome } from "./components/Buttons";
import ActivityDetailed from "./components/ActivityDetailed";
import { AppProvider } from "./context";
import Dictionary from "./components/Dictionary";
import Translator from "./components/Translator";
import TranslatorAr from "./components/TranslatorAr";
import { createBrowserHistory } from "history";

var history;

class App extends Component {
    constructor() {
        super();
        history = createBrowserHistory();
        console.log("CONSTRUCTOR: ", history);
    }

    clearHistory() {
        history = createBrowserHistory();
        console.log("CLEAR: ", history);
    }

    render() {
        return (
            <AppProvider>
                {console.log("BEGIN: ", history)}
                <div className="band">
                    <div id="App">
                        <Sidebar
                            disableAutoFocus
                            pageWrapId={"page-wrap"}
                            outerContainerId={"App"}
                            customCrossIcon={<img src={back} />}
                            history={history}
                        />
                        <div className="content" id="page-wrap">
                            <Navbar />
                            <div id="page-component">
                                <Switch>
                                    <Route
                                        exact={true}
                                        path="/ar"
                                        component={Ar}
                                    />
                                    <Route
                                        exact={true}
                                        path="/dictionary"
                                        component={Dictionary}
                                    />
                                    <Route
                                        exact={true}
                                        path="/translator"
                                        component={Translator}
                                    />
                                    <Route
                                        exact={true}
                                        path="/translatorar"
                                        component={TranslatorAr}
                                    />
                                    <Route
                                        exact={true}
                                        path="/"
                                        component={Feed}
                                    />
                                    <Route
                                        path="/:handle"
                                        component={ActivityDetailed}
                                    />
                                </Switch>
                            </div>
                        </div>
                    </div>
                    <ButtonHome
                        clear={() => this.clearHistory()}
                        history={history}
                    />
                    <ButtonBack history={history} />
                </div>
            </AppProvider>
        );
    }
}
//<Button history={history} profile="home" />
export default App;
