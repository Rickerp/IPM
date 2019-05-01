import React, { Component } from "react";
import { Link } from "react-router-dom";

var whereto = "/";

class Button extends Component {
    styles = {
        left: {
            color: "white",
            position: "absolute",
            left: "40px",
            top: "375px",
            fontSize: "14px",
            width: "30px",
            height: "30px",
            cursor: "pointer"
        },
        middle: {
            color: "white",
            position: "absolute",
            left: "100px",
            top: "375px",
            fontSize: "14px",
            width: "30px",
            height: "30px",
            cursor: "pointer"
        }
    };

    getPosition(profile) {
        switch (profile) {
            case "back":
                return this.styles.left;
            case "home":
                return this.styles.middle;
            default:
                return this.styles.middle;
        }
    }

    getIcon(profile) {
        switch (profile) {
            case "back":
                return "fas fa-chevron-left";
            case "home":
                return "fas fa-home";
            default:
                return "";
        }
    }

    getIconStyle(profile) {
        switch (profile) {
            case "back":
                return {
                    position: "absolute",
                    left: "9.5px",
                    top: "7.5px",
                    zIndex: "10"
                };
            case "home":
                return {
                    position: "absolute",
                    left: "7px",
                    top: "7.5px",
                    zIndex: "10"
                };
            default:
                return;
        }
    }

    render() {
        return (
            <div>
                <svg
                    style={{
                        zIndex: "0",
                        left: "0",
                        top: "0"
                    }}
                    height="30"
                    width="30"
                >
                    <circle
                        cx="15"
                        cy="15"
                        r="13"
                        stroke="white"
                        strokeWidth="2"
                    />
                </svg>
                <i style={this.props.iconStyle} className={this.props.icon} />
            </div>
        );
    }
}

export default Button;
