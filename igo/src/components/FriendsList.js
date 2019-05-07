import React, { useContext } from 'react'
import { AppContext } from "../context"
import User from "./User"
import styled from "styled-components"

export default function FriendsList(props) {
    const value = useContext(AppContext);

    return (
        <>
            <FriendsHeader>Friends</FriendsHeader>
            {value.state.usersData.map(item => {
                if (item.added) {
                    return <User key={item.id} item={item} />   
                }
            })}
            {/* <AddButton>Add new friend</AddButton> */}
        </>
    )
}

const FriendsHeader = styled.h3`
    text-align: center;
    margin-bottom: 10px;
`

const AddButton = styled.button`
    font-family: "Montserrat"; 
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 100px;
`
