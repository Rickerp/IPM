import React, { Component } from "react";
import styled from "styled-components";
import codes from "./../lang/codes.json";
import langs from "./../lang/langs.json";
import Word from "./Word";
import meaning from "./../lang/meaning.json";
import Popup from "reactjs-popup";

export default class Dictionary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invalidInput: false,
            success: false,
            meanings: [],
            languageMenu: false,
            lang: "0"
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillUpdate(nextState) {
        if (this.props.keyboardInput !== nextState.keyboardInput) {
            this.handleChange(nextState.keyboardInput.toLowerCase());
        }
    }

    handleChange(input) {
        let lang = this.state.lang;
        if (this.state.lang === "0") {
            lang = "pt";
        }
        const code =
            "_" +
            Object.keys(langs[lang]).find(key => langs[lang][key] === input);
        let meaning_codes = [];

        Object.keys(langs[lang]).forEach(key => {
            if (key.includes(code)) {
                meaning_codes.push(key);
            }
        });

        if (/^[a-zA-Z\u00C0-\u00ff]+$/.test(input) || input === "") {
            if (meaning_codes.length > 0) {
                this.setState({
                    success: true,
                    meanings: meaning_codes,
                    invalidInput: false
                });
            } else {
                this.setState({
                    success: false,
                    invalidInput: false
                });
            }
        } else {
            this.setState({
                success: false,
                invalidInput: true
            });
        }
    }

    toggleSortArrow() {
        this.setState({
            languageMenu: !this.state.languageMenu
        });
    }

    changeLang(newLang) {
        this.setState({ lang: newLang });
    }

    renderLang(code, language) {
        return (
            <div
                className="in-language-item"
                onClick={() => this.changeLang(code)}
            >
                {language}
            </div>
        );
    }

    renderLangs() {
        return Object.keys(codes).map(key => this.renderLang(key, codes[key]));
    }

    render() {
        console.log(langs["pt"]["_infodictionary"]);
        return (
            <React.Fragment>
                <DictionaryWrapper>
                    <div className="main-header">
                        <MainHeader>Dictionary</MainHeader>
                    </div>
                    <div
                        className="language-input"
                        onClick={() => this.props.keyboardToggle(false)}
                    >
                        <Popup
                            trigger={
                                <LanguageInput>
                                    {codes[this.state.lang] ===
                                    "Use current location"
                                        ? "based on your current location"
                                        : codes[this.state.lang]}{" "}
                                    {this.state.languageMenu ? (
                                        <i className="fas fa-sort-up" />
                                    ) : (
                                        <i className="fas fa-sort-down" />
                                    )}
                                </LanguageInput>
                            }
                            position="bottom center"
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
                            onOpen={() => this.toggleSortArrow()}
                            onClose={() => this.toggleSortArrow()}
                        >
                            {this.renderLangs()}
                        </Popup>
                    </div>
                    <div className="word-input">
                        <Box
                            invalidInput={this.state.invalidInput}
                            success={this.state.success}
                        >
                            <form>
                                <TextInput
                                    type="text"
                                    value={this.props.keyboardInput}
                                    onClick={this.props.keyboardToggle}
                                    placeholder="Search a word"
                                />
                                <SearchButton type="submit" value="Submit">
                                    <i className="fas fa-search" />
                                </SearchButton>
                            </form>
                        </Box>
                        <TextAlert invalidInput={this.state.invalidInput}>
                            Invalid input
                        </TextAlert>
                    </div>
                    <div className="line-left">
                        <Line />
                    </div>
                    <div className="side-header">
                        <SideHeader>
                            {this.state.success ? "Results" : "Top Words"}
                        </SideHeader>
                    </div>
                    <div className="line-right">
                        <Line />
                    </div>
                    <div className="word-results">
                        {this.state.success ? (
                            <Word
                                word={this.props.keyboardInput}
                                meanings={this.state.meanings}
                                code={this.state.lang}
                            />
                        ) : (
                            Object.keys(meaning).map(key => (
                                <Word
                                    word={key}
                                    meanings={meaning[key]}
                                    code={null}
                                />
                            ))
                        )}
                    </div>
                </DictionaryWrapper>
                {console.log(this.state)}
            </React.Fragment>
        );
    }
}

const DictionaryWrapper = styled.div`
    margin-top: -10px;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 45px 1fr 45px;
    grid-template-rows: 30px 50px 70px 50px 1fr;
    grid-template-areas:
        ". main-header ."
        "language-input language-input language-input"
        "word-input word-input word-input"
        "line-left side-header line-right"
        "word-results word-results word-results";
`;

const MainHeader = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`;

const LanguageInput = styled.p`
    text-align: center;
    font-size: 12px;
`;

const SideHeader = styled.p`
    text-align: center;
    font-size: 18px;
    font-weight: bold;
`;

const Line = styled.hr`
    height: 1px;
    background-color: black;
    margin-top: 28px;
`;

const Box = styled.div`
    border: ${props =>
        props.invalidInput
            ? "1px solid var(--mainRed)"
            : props.success
            ? "1px solid var(--mainGreen)"
            : "1px solid var(--mainBlack)"};
    border-radius: 10px;
    height: 22px;
    width: 200px;
    margin-left: 15px;

    .fa-search {
        color: ${props => (props.invalidInput ? "grey" : "black")};
    }
`;

const TextInput = styled.input`
    font-family: "Montserrat";
    background-color: transparent;
    width: 150px;
    margin-left: 10px;
    border: none;

    &:focus {
        outline: none;
    }
`;

const SearchButton = styled.button`
    background-color: transparent;
    border: none;
    margin-left: 10px;
`;

const TextAlert = styled.p`
    display: ${props => (props.invalidInput ? "block" : "none")};
    font-size: 14px;
    text-align: left;
    margin-left: 18px;
`;
