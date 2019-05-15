import React, { Component, useContext } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Ar from "./components/Ar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Menu";
import Feed from "./components/Feed";
import { ButtonBack, ButtonHome } from "./components/Buttons";
import Profile from "./components/Profile";
import { AppProvider } from "./context";
import Dictionary from "./components/Dictionary";
import Translator from "./components/Translator";
import TranslatorAr from "./components/TranslatorAr";
import { createBrowserHistory } from "history";
import Keyboard from "react-simple-keyboard";
import "./keyboard.css";
import FriendsList from "./components/FriendsList";
import UsersList from "./components/UsersList";
import Sharoute from "./components/Sharoute";
import LocationList from "./components/LocationList";
import PopularRoutes from "./components/PopularRoutes";
import Maps from "./components/Maps";

var history;
var backAction;

class App extends Component {
	constructor() {
		super();
		history = createBrowserHistory();
		backAction = [];
	}

	state = {
		keyboard: false,
		keyboardInput: "",
		infoPopup: null
	};

	styles = {
		keyboardOn: {
			width: "auto",
			height: "auto",
			position: "absolute",
			zIndex: "11",
			bottom: -5,
			left: -9,
			transform: "scale(0.915)",
			backgroundColor: "#eeeeee"
		},
		keyboardOff: {
			width: "auto",
			height: "auto",
			transform: "scale(0)"
		}
	};

	pushBack(func) {
		backAction.push(func);
	}

	popBack() {
		backAction.pop();
	}

	handleBack() {
		if (backAction.length == 0) {
			this.setInput("");
			history.goBack();
		} else {
			const tmp = () => backAction.pop();
			tmp();
		}
	}

	handleHome() {
		this.toggleKeyboard(false);
		this.setInput("");
		history.push("/");
		history.push("/");
		history.goBack();
	}

	toggleKeyboard(state) {
		if (state === undefined) state = !this.state.keyboard;
		if (state !== this.state.keyboard) {
			if (!this.state.keyboard) {
				backAction = () => this.toggleKeyboard(false);
				this.setState({ keyboard: true });
			} else {
				backAction = null;
				this.setState({ keyboard: false });
			}
		}
	}

	getKeyboardStyle() {
		return this.state.keyboard
			? this.styles.keyboardOn
			: this.styles.keyboardOff;
	}

	setInput(input) {
		this.setState({ keyboardInput: input });
	}

	render() {
		return (
			<AppProvider>
				<div className="band">
					<div id="App">
						{this.state.infoPopup}
						<Sidebar
							disableAutoFocus
							pageWrapId={"page-wrap"}
							outerContainerId={"App"}
							keyboardToggle={state => this.toggleKeyboard(state)}
						/>
						<div className="content" id="page-wrap">
							<Navbar history={history} />
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
										render={props => (
											<Dictionary
												keyboardInput={
													this.state.keyboardInput
												}
												keyboardToggle={state =>
													this.toggleKeyboard(state)
												}
												{...props}
											/>
										)}
									/>
									<Route
										exact={true}
										path="/translator"
										render={props => (
											<Translator
												keyboardInput={
													this.state.keyboardInput
												}
												keyboardToggle={state =>
													this.toggleKeyboard(state)
												}
												{...props}
											/>
										)}
									/>
									<Route
										exact={true}
										path="/translatorar"
										component={TranslatorAr}
									/>
									<Route
										exact={true}
										path="/sharoute"
										component={Sharoute}
									/>
									<Route
										exact={true}
										path="/popularroutes"
										component={PopularRoutes}
									/>
									<Route
										exact={true}
										path="/location"
										component={LocationList}
									/>
									<Route
										exact={true}
										path="/maps"
										component={Maps}
									/>
									<Route
										exact={true}
										path="/friends"
										render={props => (
											<FriendsList
												setBack={func =>
													this.pushBack(func)
												}
												{...props}
											/>
										)}
									/>
									<Route
										exact={true}
										path="/users"
										render={props => (
											<UsersList
												keyboardInput={
													this.state.keyboardInput
												}
												keyboardToggle={state =>
													this.toggleKeyboard(state)
												}
												setBack={func =>
													this.pushBack(func)
												}
												{...props}
											/>
										)}
									/>
									<Route
										exact={true}
										path="/"
										render={props => (
											<Feed
												setBack={func =>
													this.pushBack(func)
												}
												{...props}
											/>
										)}
									/>
									<Route
										path="/:handle"
										component={Profile}
									/>
								</Switch>
							</div>
						</div>
						<div style={this.getKeyboardStyle()}>
							<Keyboard
								onChange={input => this.setInput(input)}
								layout={{
									default: [
										"Q W E R T Y U I O P {bksp}",
										"{whitesp} A S D F G H J K L {whitesp}",
										"{whitesp} {whitesp} Z X C V B N M {whitesp} {whitesp}",
										"{space}"
									]
								}}
								display={{
									"{bksp}": "⬅",
									"{enter}": "↵",
									"{whitesp}": " ",
									"{space}": "______"
								}}
							/>
						</div>
					</div>
					<ButtonHome
						onClick={() => this.handleHome()}
						history={history}
					/>
					<ButtonBack
						onClick={() => this.handleBack()}
						history={history}
					/>
				</div>
			</AppProvider>
		);
	}
}
//<Button history={history} profile="home" />
export default App;
