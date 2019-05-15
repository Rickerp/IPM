import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<Router>
		<App />
		<div
			style={{
				backgroundColor: "white",
				position: "absolute",
				left: "calc(50% - 325px)",
				zIndex: "1201",
				top: "0px",
				width: "200px",
				height: "400px"
			}}
		/>
		<div
			style={{
				backgroundColor: "black",
				position: "absolute",
				left: "calc(50% - 325px)",
				zIndex: "1200",
				top: "25px",
				width: "209.5px",
				height: "360px"
			}}
		/>
	</Router>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
