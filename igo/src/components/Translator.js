import React, { Component } from 'react'
import styled from "styled-components" 

export default class Translator extends Component {
    render() {
        return (
            <TranslatorWrapper>
                <div className="main-tr-header">
                    <MainHeader>Translator</MainHeader>
                </div>
                <div className="in-language-input">
                    <LanguageInput>Portuguese <i class="fas fa-sort-down"></i></LanguageInput>
                </div>
                <ExtraButtons className="extra-buttons">
                    <i class="fas fa-camera"></i> &nbsp;
                    <i class="fas fa-microphone"></i>
                </ExtraButtons>
                <div className="word-tr-input">
                    <Box>
                        <form>
                            <TextInput type="text" />
                            <SearchButton type="submit" value="Submit">Translate</SearchButton>
                        </form>
                        <Line></Line>
                        <form>
                            <TextInput type="text" />
                        </form>
                    </Box>
                </div>
                <div className="out-language-input">
                    <LanguageInput>English <i class="fas fa-sort-down"></i></LanguageInput>
                </div>
{/*                 <div className="word-tr-output">
                    <Box>
                        <form>
                            <TextInput type="text" />
                            <SearchButton type="submit" value="Submit"><i class="fas fa-search"></i></SearchButton>
                        </form>
                    </Box>
                </div> */}
            </TranslatorWrapper>
        )
    }
}

const TranslatorWrapper = styled.div`
    margin-top: -10px;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 10px 45px 1fr 45px;
    grid-template-rows: 30px 10px 30px 5px 100px 30px;
    grid-template-areas:
        "main-tr-header main-tr-header main-tr-header main-tr-header" 
        ". . . ."
        ". in-language-input in-language-input extra-buttons"
        ". . . ."
        ". word-tr-input word-tr-input word-tr-input"
        ". out-language-input out-language-input out-language-input";
`

const MainHeader = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`

const Line = styled.hr`
  height: 1px;
  background-color: grey;
  margin-top: -0.5px;
`

const LanguageInput = styled.p`
  text-align: left;
  font-size: 16px;
  font-weight: 500;
`

const ExtraButtons = styled.div`
    margin-top: 15px;
    font-size: 14px;
`

const TextInput = styled.input`
  font-family: "Montserrat";
  background-color: transparent;
  width: 150px;
  border: none;

  &:focus {
    outline: none;
  }
`

const SearchButton = styled.button`
  font-family: "Montserrat";
  font-size: 16px;
  position: relative;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;
  top: 170px;
  left: 40px;
  width: 115px;
  height: 27px;
`

const Box = styled.div`
  border-radius: 5px;
  height: 100px;
  width: 200px;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.3);

  .fa-search {
    color: black;
  }
`
