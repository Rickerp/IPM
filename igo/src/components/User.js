import React, { useContext } from 'react'
import { AppContext } from "../context"
import styled from "styled-components"
import { Spring } from 'react-spring/renderprops'

export default function User(props) {
    const value = useContext(AppContext);

    return (
        <Spring 
            from={{ opacity: 0, marginTop: -20 }}
            to={{ opacity: 1, marginTop: 0 }}
        >
            {springProps => <div style={springProps}>
                <UserWrapper>
                    <Avatar className="user-avatar">
                        <img src={props.item.avatar} alt="User"></img>
                    </Avatar>
                    <div className="user-name">
                        <NameText>{props.item.name}</NameText>
                    </div>
                    <div className="user-description">
                        <DescriptionText>{props.item.description}</DescriptionText>
                    </div>
                    <UserOptions className="user-options">
                        {props.item.added ? <i className="fas fa-minus" onClick={() => value.removeFriend(props.item.id)}></i> : 
                        <i className="fas fa-plus" onClick={() => value.addFriend(props.item.id)}></i>}
                    </UserOptions>
                </UserWrapper>
            </div>}
        </Spring>
    )
}

const UserWrapper = styled.div`
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 40px 1fr 1fr 30px;
    grid-template-rows: 3px 30px 15px 3px;
    grid-template-areas:
        ". . . ." 
        "user-avatar user-name user-name user-options"
        "user-avatar user-description user-description user-options"
        ". . . .";
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

const UserOptions = styled.div`
    display: block;
    margin-right: auto;
    margin-left: 10px;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 75%;
`
