import React, { Component } from "react";
import Clock from "react-live-clock";
import { Swipe, Position } from "react-swipe-component";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <Navb>
        <p className="clock-total">
          <Clock
            className="clock-hours"
            format={"HH:mm"}
            ticking={true}
            timezone={"Europe/London"}
          />
          <Clock
            className="clock"
            format={"ddd, MMM DD"}
            ticking={true}
            timezone={"Europe/London"}
          />
        </p>
        <div className="battery">
          <Percentage>1%</Percentage>
          <i className="fas fa-battery-quarter" />
        </div>
      </Navb>
    );
  }
}

const Navb = styled.div`
  position: fixed;
  top: 0;
  background-color: white;
  margin-top: 20px;
  height: 30px;
  width: 7.85%;
  border-bottom: 1px solid black;
`;

const Percentage = styled.span`
  margin-right: 3px;
`
