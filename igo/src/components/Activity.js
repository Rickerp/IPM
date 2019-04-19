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
    grid-gap: 3px;
    grid-template-columns: 40px 1fr 1fr;
    grid-template-rows: 30px 15px 40px;
    grid-template-areas: 
        "avatar name name"
        "avatar timestamp timestamp"
        "activity activity activity";
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
    font-size: 95%;
    font-weight: 700;
    margin-left: 10px;
    margin-top: 5px;
`

const ActivityText = styled.p`
    font-size: 80%;
    font-weight: 500;
    margin-left: 10px;
    margin-top: 5px;
`

const TimeText = styled.p`
    font-size: 70%;
    margin-left: 10px;
    margin-top: -9px;
`
