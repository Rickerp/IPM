import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"

export default class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: this.props.item.avatar,
            name: this.props.item.name,
            activity: this.props.item.activity,
            timestamp: this.props.item.timestamp,
            comments: this.props.item.comments,
            likes: this.props.item.likes,
            liked: false
        }
        this.increaseLikes = this.increaseLikes.bind(this);
        this.decreaseLikes = this.decreaseLikes.bind(this);
    }

    increaseLikes () {
        this.setState(prevState => {
            let likes = prevState.likes + 1

            return {
                avatar: prevState.avatar,
                name: prevState.name,
                activity: prevState.activity,
                timestamp: prevState.timestamp,
                comments: prevState.comments,
                likes: likes,
                liked: true
            };
        });
    }

    decreaseLikes () {
        this.setState(prevState => {
            let likes = prevState.likes - 1

            return {
                avatar: prevState.avatar,
                name: prevState.name,
                activity: prevState.activity,
                timestamp: prevState.timestamp,
                comments: prevState.comments,
                likes: likes,
                liked: false
            };
        });
    }

  render() {
    return (
      <React.Fragment>
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
        <AddedWrapper>
            <div className="comments">
                <Added>
                    <i className="far fa-comment"></i> {this.state.comments}
                </Added>
            </div>
            <div className="likes">
                <Added>
                    {this.state.liked ? <i onClick={this.decreaseLikes} className="fas fa-heart heart-filled"></i> : <i onClick={this.increaseLikes} className="far fa-heart"></i>} {this.state.likes}
                </Added>
            </div>
        </AddedWrapper>
      </React.Fragment>
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
