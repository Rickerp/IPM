import React, { Component } from 'react'
import styled from "styled-components"
import langs from "./../lang/langs.json"
import { Spring } from 'react-spring/renderprops'

export default class Word extends Component {
    render() {
        return (
            <Spring 
            from={{ opacity: 0, marginTop: -20 }}
            to={{ opacity: 1, marginTop: 20 }}
            config={{ delay: 100, duration: 900 }}
            >
                {props => <div style={props}>
                    <WordWrapper>
                        <div className="word">
                            <WordP>{this.props.word}: </WordP>
                        </div>
                        <div className="meaning">
                            {this.props.code != null ? this.props.meanings.map(element => <Meaning>{langs[this.props.code === "0" ? "pt" : this.props.code][element]}</Meaning>) 
                            : Object.keys(this.props.meanings).map(key => <Meaning>(<b>{key}</b>) {this.props.meanings[key]}</Meaning>)}
                        </div>
                    </WordWrapper>
                </div>}
            </Spring>
        )
    }
}

const WordWrapper = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 15px 1fr 1fr 15px;
    grid-template-rows: 30px 1fr;
    grid-template-areas: 
        ". word word ."
        ". meaning meaning .";
`

const WordP = styled.p`
    font-size: 16px;
    font-weight: bold;
    text-transform: capitalize;
`

const Meaning = styled.p`
    font-size: 14px;
`
