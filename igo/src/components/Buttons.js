import React, { useContext } from "react"
import { AppContext } from "../context"

const Button = (props) => {
    const value = useContext(AppContext)

    return (
        <div style={props.buttonStyle} onClick={() => {
            props.onClick()
            value.increaseCounter()
            }}>
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
            <i style={props.iconStyle} className={props.icon} />
        </div>
    );
}

const ButtonBack = (props) => {
    const styles = {
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

    return (
        <Button
            buttonStyle={styles.button}
            onClick={() => props.onClick()}
            icon="fas fa-chevron-left"
            iconStyle={styles.icon}
        />
    );
}

export { ButtonBack };

const ButtonHome = (props) => {
    const styles = {
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

    return (
        <Button
            buttonStyle={styles.button}
            onClick={() => props.onClick()}
            icon="fas fa-home"
            iconStyle={styles.icon}
        />
    );
}

export { ButtonHome };
