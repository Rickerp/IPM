import React, { Component } from "react";
import styled from "styled-components";
import codes from "./../lang/codes.json";

export default class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Search a word",
      invalidInput: false,
      lang: "0"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
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
  }

  onFocus(event) {
    if (event.target.value === "Search a word") {
      this.setState({
        value: "",
        invalidInput: false
      });
    }
  }

  onBlur(event) {
    if (event.target.value === "") {
      this.setState({
        value: "Search a word",
        invalidInput: false
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <DictionaryWrapper>
          <div className="main-header">
            <MainHeader>Dictionary</MainHeader>
          </div>
          <div className="language-input">
            <LanguageInput>
              {codes[this.state.lang]} <i class="fas fa-sort-down" />
            </LanguageInput>
          </div>
          <div className="word-input">
            <Box invalidInput={this.state.invalidInput}>
              <form onSubmit={this.handleSubmit}>
                <TextInput
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                />
                <SearchButton type="submit" value="Submit">
                  <i class="fas fa-search" />
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
            <SideHeader>Top Words</SideHeader>
          </div>
          <div className="line-right">
            <Line />
          </div>
        </DictionaryWrapper>
      </React.Fragment>
    );
  }
}

const DictionaryWrapper = styled.div`
  margin-top: -10px;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: 45px 1fr 45px;
  grid-template-rows: 30px 50px 70px 50px;
  grid-template-areas:
    ". main-header ."
    "language-input language-input language-input"
    "word-input word-input word-input"
    "line-left side-header line-right";
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
  border: 1px solid
    ${props => (props.invalidInput ? "var(--mainRed)" : "var(--mainBlack)")};
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
