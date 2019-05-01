import React, { Component } from 'react'
import styled from "styled-components"

export default class Word extends Component {

    render() {
        return (
            <WordWrapper>
                <div className="word">
                    <WordP>{this.props.word}: </WordP>
                </div>
                <div className="meaning">
        {Object.keys(this.props.meanings).map(key => <Meaning>(<b>{key}</b>) {this.props.meanings[key]}</Meaning>)}
                </div>
            </WordWrapper>
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
