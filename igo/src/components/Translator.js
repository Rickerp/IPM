import React, { Component } from "react";
import styled from "styled-components";
import codes from "./../lang/codes.json";
import langs from "./../lang/langs.json";

export default class Translator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Type something",
      result: "",
      fromLang: "pt",
      toLang: "en"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.changeFromLang = this.changeFromLang.bind(this);
    this.changeToLang = this.changeToLang.bind(this);
  }

  handleChange(event) {
    if (/^[a-zA-Z]+$/.test(event.target.value) || event.target.value === "") {
      this.setState({
        value: event.target.value,
        invalidInput: false
      });
    } else {
      this.setState({
        value: event.target.value,
        invalidInput: true
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const code = Object.keys(langs[this.state.fromLang]).find(key => langs[this.state.fromLang][key] === this.state.value);
    this.setState({result: langs[this.state.toLang][code]});
  }

  onFocus(event) {
    if (event.target.value === "Type something") {
      this.setState({
        value: "",
        invalidInput: false
      });
    }
  }

  onBlur(event) {
    if (event.target.value === "") {
      this.setState({
        value: "Type something",
        invalidInput: false
      });
    }
  }

  changeFromLang(newLang) {
    this.setState({fromLang: newLang});
  }

  changeToLang(newLang) {
    this.setState({toLang: newLang});
  }

  render() {
    return (
      <TranslatorWrapper>
        <div className="main-tr-header">
          <MainHeader>Translator</MainHeader>
        </div>
        <div className="in-language-input">
          <LanguageInput>
            {codes[this.state.fromLang]} &nbsp;{" "}
            <i class="fas fa-arrow-circle-right" /> &nbsp;
            {codes[this.state.toLang]}
          </LanguageInput>
        </div>
        {/*                 <ExtraButtons className="extra-buttons">
                    <i class="fas fa-camera"></i> &nbsp;
                    <i class="fas fa-microphone"></i>
                </ExtraButtons> */}
        <div className="word-tr-input">
          <Box>
            <form onSubmit={this.handleSubmit}>
              <TextInput type="text" value={this.state.value} onChange={this.handleChange} onFocus={this.onFocus} onBlur={this.onBlur}/>
              <SearchButton type="submit" value="Submit">
                Translate
              </SearchButton>
            </form>
            <Line />
            <form>
              <TextInput type="text" value={this.state.result}/>
            </form>
          </Box>
        </div>
        {/*                 <div className="out-language-input">
                    <LanguageInput>English <i class="fas fa-sort-down"></i></LanguageInput>
                </div> */}
        {/*                 <div className="word-tr-output">
                    <Box>
                        <form>
                            <TextInput type="text" />
                            <SearchButton type="submit" value="Submit"><i class="fas fa-search"></i></SearchButton>
                        </form>
                    </Box>
                </div> */}
      </TranslatorWrapper>
    );
  }
}

const TranslatorWrapper = styled.div`
  margin-top: -10px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 10px 45px 1fr 45px;
  grid-template-rows: 30px 10px 30px 5px 100px;
  grid-template-areas:
    "main-tr-header main-tr-header main-tr-header main-tr-header"
    ". . . ."
    ". in-language-input in-language-input in-language-input"
    ". . . ."
    ". word-tr-input word-tr-input word-tr-input";
`;

const MainHeader = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const Line = styled.hr`
  height: 1px;
  background-color: grey;
  margin-top: -0.5px;
`;

const LanguageInput = styled.p`
  text-align: left;
  font-size: 14px;
  font-weight: 500;
`;

const ExtraButtons = styled.div`
  margin-top: 15px;
  font-size: 14px;
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
  height: 100px;
  width: 200px;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.3);

  .fa-search {
    color: black;
  }
`;
