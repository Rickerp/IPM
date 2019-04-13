import React, { Component } from "react";
import Clock from "react-live-clock";
import { Swipe, Position } from "react-swipe-component";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <Navb>
        <div className="clock-div">
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
        </div>
        <div className="battery">
          <Percentage>1%</Percentage>
          <i className="fas fa-battery-quarter" />
        </div>
      </Navb>
    );
  }
}

const Navb = styled.div`
  position: absolute;
  background-color: white;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: 150px 79px;
  grid-template-rows: 20px 8px;
  grid-template-areas: 
      "clock-div battery"
      ". .";
  border-bottom: 1px solid black;
`;

const Percentage = styled.span`
  margin-right: 3px;
  top: 30px;
`;
