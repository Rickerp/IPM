import React, { Component } from 'react'
import TranslatorArData from "../TranslatorArData"
import styled from "styled-components"

export default class TranslatorAr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: TranslatorArData
        }
    }

    render() {
        return (
            <ImageAr src={this.state.data[Math.floor(Math.random() * 3)]} alt="Sinal Traduzido"></ImageAr>
        )
    }
}

const ImageAr = styled.img`
    margin-top: -10px;
    overflow-y: hidden;
`
