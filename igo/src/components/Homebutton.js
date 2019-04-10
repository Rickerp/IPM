import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeButton extends Component {
  styles = {
    color: "white",
    position: "absolute",
    left: "60px",
    top: "250px",
    fontSize: "14px"
  };

  render() {
    return (
      <Link to="/">
        <div style={this.styles}>
          <svg
            style={{ position: "absolute", zIndex: "0", left: "0", top: "0" }}
            height="30"
            width="30"
          >
            <circle cx="15" cy="15" r="13" stroke="white" strokeWidth="2" />
          </svg>
          <i
            style={{
              position: "absolute",
              left: "7px",
              top: "7.5px",
              zIndex: "10"
            }}
            className="fas fa-home"
          />
        </div>
      </Link>
    );
  }
}

export default HomeButton;
