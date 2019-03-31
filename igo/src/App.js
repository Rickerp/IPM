import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <h1>Hello from app!</h1>
      </React.Fragment>
    );
  }
}

export default App;
