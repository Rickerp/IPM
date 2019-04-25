import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"
import { AppConsumer } from "../context"
import {Spring} from 'react-spring/renderprops'

export default class Activity extends Component {
  render() {
    return (
      <Spring 
        from={{ opacity: 0, marginTop: -20 }}
        to={{ opacity: 1, marginTop: 20 }}
        config={{ delay: 100, duration: 900 }}
      >
        {props => <div style={props}>
            <Link style={{ textDecoration: 'none' }} to={{
            pathname: this.props.item.name,
            state: {
                avatar: this.props.item.avatar,
                name: this.props.item.name,
                activity: this.props.item.activity,
                timestamp: this.props.item.timestamp
            }
            }}>
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
            </Link>
            <AppConsumer>
                {value => (
                    <AddedWrapper>
                        <div className="comments">
                            <Added>
                                <i className="far fa-comment"></i> {this.props.item.comments}
                            </Added>
                        </div>
                        <div className="likes">
                            <Added>
                                {this.props.item.liked ? <i onClick={() => value.decreaseLikes(this.props.item.id)} className="fas fa-heart heart-filled"></i> : <i onClick={() => value.increaseLikes(this.props.item.id)} className="far fa-heart"></i>} {this.props.item.likes}
                            </Added>
                        </div>
                    </AddedWrapper>
                )}
            </AppConsumer>
        </div>}
      </Spring>
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
`

const AddedWrapper = styled.div`
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 40px 1fr 1fr;
    grid-template-rows: 15px;
    grid-template-areas: 
        "comments likes .";
    box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);
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
    color: black;
    text-decoration: none;
`

const ActivityText = styled.p`
    font-size: 80%;
    font-weight: 500;
    margin-left: 10px;
    margin-top: 5px;
    color: black;
    text-decoration: none;
`

const TimeText = styled.p`
    font-size: 70%;
    margin-left: 10px;
    margin-top: -9px;
    color: black;
    text-decoration: none;
`

const Added = styled.span`
    font-size: 12px;
    margin-left: 12px;
    top: 10px;
`
