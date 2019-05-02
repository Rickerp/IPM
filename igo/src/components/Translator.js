import React, { Component } from "react";
import styled from "styled-components";
import codes from "./../lang/codes.json";
import langs from "./../lang/langs.json";
import Popup from "reactjs-popup";
import Speech from "speak-tts";

export default class Translator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "",
            success: false,
            fromLang: "pt",
            toLang: "en"
        };

        this.handleChange = this.handleChange.bind(this);
        this.changeFromLang = this.changeFromLang.bind(this);
        this.changeToLang = this.changeToLang.bind(this);
    }

    styles = {
        audioButton: {
            position: "relative",
            float: "right",
            right: 10,
            top: 0
        }
    };

    componentWillUpdate(nextState) {
        if (this.props.keyboardInput !== nextState.keyboardInput) {
            this.handleChange(nextState.keyboardInput.toLowerCase());
        }
    }

    renderFromLang(code, language) {
        if (code != "0") {
            return (
                <div
                    className="in-language-item"
                    onClick={() => this.changeFromLang(code)}
                >
                    {language}
                </div>
            );
        }
    }

    renderFromLangs() {
        return Object.keys(codes).map(key =>
            this.renderFromLang(key, codes[key])
        );
    }

    renderToLang(code, language) {
        if (code != "0") {
            return (
                <div
                    className="in-language-item"
                    onClick={() => this.changeToLang(code)}
                >
                    {language}
                </div>
            );
        }
    }

    renderToLangs() {
        return Object.keys(codes).map(key =>
            this.renderToLang(key, codes[key])
        );
    }

    handleChange(input) {
        const code = Object.keys(langs[this.state.fromLang]).find(
            key => langs[this.state.fromLang][key] === input
        );

        if (/^[a-zA-Z\u00C0-\u00ff]+$/.test(input) || input === "") {
            if (code != null) {
                this.setState({
                    result: langs[this.state.toLang][code].toUpperCase(),
                    success: true,
                    invalidInput: false
                });
            } else {
                this.setState({
                    result: input.toUpperCase(),
                    success: false,
                    invalidInput: false
                });
            }
        } else {
            this.setState({
                result: "Invalid input",
                success: false,
                invalidInput: true
            });
        }
    }

    changeFromLang(newLang) {
        this.setState({ fromLang: newLang });
    }

    changeToLang(newLang) {
        this.setState({ toLang: newLang });
    }

    speechInput() {
        const speech = new Speech();
        if (speech.hasBrowserSupport()) {
            // returns a boolean
            console.log("speech synthesis supported");
        }
        speech
            .init()
            .then(data => {
                // The "data" object contains the list of available voices and the voice synthesis params
                console.log("Speech is ready, voices are available", data);
            })
            .catch(e => {
                console.error("An error occured while initializing : ", e);
            });
        speech
            .speak({
                text: this.props.keyboardInput
            })
            .then(() => {
                console.log("Success !");
            })
            .catch(e => {
                console.error("An error occurred :", e);
            });
    }

    speechOutput() {
        const speech = new Speech();
        if (speech.hasBrowserSupport()) {
            // returns a boolean
            console.log("speech synthesis supported");
        }
        speech
            .init()
            .then(data => {
                // The "data" object contains the list of available voices and the voice synthesis params
                console.log("Speech is ready, voices are available", data);
            })
            .catch(e => {
                console.error("An error occured while initializing : ", e);
            });
        speech
            .speak({
                text: this.state.result
            })
            .then(() => {
                console.log("Success !");
            })
            .catch(e => {
                console.error("An error occurred :", e);
            });
    }

    render() {
        console.log(langs["pt"]["_infotranslator"]);
        return (
            <TranslatorWrapper>
                <div className="main-tr-header">
                    <MainHeader>Translator</MainHeader>
                </div>
                <div
                    className="in-language-input"
                    onClick={() => this.props.keyboardToggle(false)}
                >
                    <Popup
                        trigger={
                            <InputLanguage>
                                {" "}
                                {codes[this.state.fromLang]}{" "}
                            </InputLanguage>
                        }
                        position="bottom left"
                        on="click"
                        closeOnDocumentClick
                        mouseLeaveDelay={300}
                        mouseEnterDelay={0}
                        contentStyle={{
                            padding: "0px",
                            maxHeight: "60%",
                            overflowY: "auto",
                            overflowX: "hidden",
                            border: "1px solid black"
                        }}
                        arrow={true}
                    >
                        {this.renderFromLangs()}
                    </Popup>
                </div>
                <div className="arrow">
                    <i className="fas fa-arrow-circle-right" />
                </div>
                <div
                    className="out-language-input"
                    onClick={() => this.props.keyboardToggle(false)}
                >
                    <Popup
                        trigger={
                            <InputLanguage>
                                {" "}
                                {codes[this.state.toLang]}{" "}
                            </InputLanguage>
                        }
                        position="bottom right"
                        on="click"
                        closeOnDocumentClick
                        mouseLeaveDelay={300}
                        mouseEnterDelay={0}
                        contentStyle={{
                            padding: "0px",
                            maxHeight: "60%",
                            overflowY: "auto",
                            border: "1px solid black"
                        }}
                        arrow={true}
                    >
                        {this.renderToLangs()}
                    </Popup>
                </div>
                <div className="word-tr-input">
                    <Box
                        invalidInput={this.state.invalidInput}
                        success={this.state.success}
                    >
                        <TextInput
                            type="text"
                            value={this.props.keyboardInput}
                            onClick={this.props.keyboardToggle}
                            placeholder="Type something..."
                        />
                        <i
                            onClick={() => this.speechInput()}
                            className="fas fa-volume-up"
                            style={this.styles.audioButton}
                        />
                        <Line />
                        <i
                            onClick={() => this.speechOutput()}
                            className="fas fa-volume-up"
                            style={this.styles.audioButton}
                        />
                        <TextInput type="text" value={this.state.result} />
                    </Box>
                </div>
                <ExtraButtons className="extra-buttons">
                    <i className="fas fa-camera" /> <br />
                </ExtraButtons>
            </TranslatorWrapper>
        );
    }
}

const TranslatorWrapper = styled.div`
    margin-top: -10px;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 10px 1fr 50px 1fr 10px;
    grid-template-rows: 30px 20px 30px 5px 100px 20px 30px;
    grid-template-areas:
        "main-tr-header main-tr-header main-tr-header main-tr-header main-tr-header"
        ". . . . ."
        ". in-language-input arrow out-language-input ."
        ". . . . ."
        ". word-tr-input word-tr-input word-tr-input ."
        ". . . . ."
        ". extra-buttons extra-buttons extra-buttons .";
`;

const MainHeader = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
`;

const Line = styled.hr`
    height: 1px;
    background-color: grey;
    margin-top: 30px;
    margin-bottom: 10px;
`;

const InputLanguage = styled.button`
    font-family: "Montserrat";
    font-size: 12px;
    background: transparent;
    border: 1px solid black;
    border-radius: 10px;
`;

const ExtraButtons = styled.div`
    margin-top: 15px;
    font-size: 18px;
    text-align: center;

    .fa-camera {
        margin-right: 40px;
    }
`;

const TextInput = styled.input`
    font-family: "Montserrat";
    background-color: transparent;
    width: 190px;
    border: none;
    margin-left: 5px;

    &:focus {
        outline: none;
    }
`;

const SearchButton = styled.button`
    font-family: "Montserrat";
    font-size: 16px;
    position: relative;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 10px;
    top: 130px;
    left: 40px;
    width: 115px;
    height: 27px;
`;

const Box = styled.div`
    border-radius: 5px;
    border: ${props =>
        props.invalidInput
            ? "1px solid var(--mainRed)"
            : props.success
            ? "1px solid var(--mainGreen)"
            : "none"};
    height: 100px;
    width: 200px;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.3);

    .fa-search {
        color: black;
    }
`;
