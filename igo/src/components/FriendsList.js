import React, { Component } from 'react'
import { AppConsumer } from "../context"
import User from "./User"
import styled from "styled-components"

export default class FriendsList extends Component {
    render() {
        return (
            <React.Fragment>
                <FriendsHeader>Friends</FriendsHeader>
                <AppConsumer>
                    {value => {
                        return value.state.usersData.map(item => {
                            if (item.added) {
                                return <User key={item.id} item={item} />   
                            }
                        })
                    }}
                </AppConsumer>
            </React.Fragment>
        )
    }
}

const FriendsHeader = styled.h3`
    text-align: center;
    margin-bottom: 10px;
`
