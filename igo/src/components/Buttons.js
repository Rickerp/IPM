import React, { Component } from "react";

class Button extends Component {
    render() {
        return (
            <div style={this.props.buttonStyle} onClick={this.props.onClick}>
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

class ButtonBack extends Component {
    styles = {
        button: {
            color: "white",
            position: "absolute",
            left: "40px",
            top: "375px",
            fontSize: "14px",
            width: "30px",
            height: "30px",
            cursor: "pointer"
        },
        icon: {
            position: "absolute",
            left: "9.5px",
            top: "7.5px",
            zIndex: "10"
        }
    };

    render() {
        return (
            <Button
                buttonStyle={this.styles.button}
                onClick={() => this.props.history.goBack()}
                icon="fas fa-chevron-left"
                iconStyle={this.styles.icon}
            />
        );
    }
}

export { ButtonBack };

class ButtonHome extends Component {
    styles = {
        button: {
            color: "white",
            position: "absolute",
            left: "100px",
            top: "375px",
            fontSize: "14px",
            width: "30px",
            height: "30px",
            cursor: "pointer"
        },
        icon: {
            position: "absolute",
            left: "7px",
            top: "7.5px",
            zIndex: "10"
        }
    };

    render() {
        return (
            <Button
                buttonStyle={this.styles.button}
                onClick={() => {
                    this.props.history.push("/");
                    this.props.history.push("/");
                    this.props.history.goBack();
                }}
                icon="fas fa-home"
                iconStyle={this.styles.icon}
            />
        );
    }
}

export { ButtonHome };
