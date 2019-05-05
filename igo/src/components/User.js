import React, { Component } from 'react'
import styled from "styled-components"
import artur from "../Artur.png"

export default class User extends Component {
    render() {
        return (
            <UserWrapper>
                <Avatar className="user-avatar">
                    <img src={this.props.item.avatar} alt="User"></img>
                </Avatar>
                <div className="user-name">
                    <NameText>{this.props.item.name}</NameText>
                </div>
                <div className="user-description">
                    <DescriptionText>{this.props.item.description}</DescriptionText>
                </div>
            </UserWrapper>
        )
        }
}

const UserWrapper = styled.div`
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 40px 1fr 1fr;
    grid-template-rows: 3px 30px 15px 3px;
    grid-template-areas:
        ". . ." 
        "user-avatar user-name user-name"
        "user-avatar user-description user-description"
        ". . .";
    border-bottom: 1px solid var(--mainBlack);
`

const Avatar = styled.div`
    display: block;
    margin-right: auto;
    margin-left: 10px;
    margin-top: auto;
    margin-bottom: auto;
`

const NameText = styled.p`
    font-size: 100%;
    font-weight: 700;
    margin-left: 10px;
    margin-top: 5px;
    color: black;
    text-decoration: none;
`

const DescriptionText = styled.p`
    font-size: 80%;
    margin-left: 10px;
    margin-top: -9px;
    color: black;
    text-decoration: none;
`
