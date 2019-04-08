import React, { Component } from 'react'
import styled from "styled-components"

export default class Activity extends Component {
  render() {
    return (
      <ActivityWrapper>
        <Avatar className="avatar">
            <img src={this.props.item.avatar} alt="Person"></img>
        </Avatar>
        <div className="name">
            <NameText>{this.props.item.name}</NameText>
        </div>
        <div className="activity">
            <ActivityText>{this.props.item.activity}</ActivityText>
        </div>
        <div className="timestamp">
            <TimeText>{this.props.item.timestamp}</TimeText>
        </div>
      </ActivityWrapper>
    )
  }
}

const ActivityWrapper = styled.div`
    margin-top: 20px;
    display: grid;
    grid-gap: 1px;
    grid-template-columns: 40px 1fr 1fr;
    grid-template-rows: repeat(2, 30px);
    grid-template-areas: 
        "avatar name name"
        "activity activity timestamp";
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`

const Avatar = styled.div`
    display: block;
    margin-right: auto;
    margin-left: 10px;
    margin-top: auto;
    margin-bottom: auto;
`

const NameText = styled.p`
    font-size: 75%;
    font-weight: 700;
    margin-top: 5px;
`

const ActivityText = styled.p`
    font-size: 60%;
    font-weight: 500;
    margin-left: 10px;
    margin-top: auto;
`

const TimeText = styled.p`
    font-size: 50%;
    margin-top: auto;
`
