import React, { Component } from "react";
import Clock from "react-live-clock";
import { Swipe, Position } from "react-swipe-component";
import styled from "styled-components";
import Popup from "reactjs-popup";

export default class Navbar extends Component {
    styles = {
        info: {
            position: "absolute",
            right: "40px",
            top: "5px"
        }
    };

    readInfo() {
        //ANLISAR: this.props.history.location.pathname
    }

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
                <Popup
                    trigger={
                        <div
                            style={this.styles.info}
                            onClick={this.props.showInfo}
                        >
                            <i class="fas fa-info-circle" />
                        </div>
                    }
                    position="bottom right"
                    on="click"
                    closeOnDocumentClick
                    mouseLeaveDelay={300}
                    mouseEnterDelay={0}
                    contentStyle={{
                        padding: "0px",
                        maxHeight: "100%",
                        overflowY: "auto",
                        overflowX: "hidden",
                        maxWidth: "150px",
                        fontSize: "15px",
                        border: "1px solid black"
                    }}
                    arrow={true}
                >
                    {this.readInfo()}
                </Popup>

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
