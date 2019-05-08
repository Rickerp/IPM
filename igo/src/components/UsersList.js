import React, { useContext } from 'react'
import { AppContext } from "../context"
import User from "./User"
import styled from "styled-components"

export default function UsersLists() {
    const value = useContext(AppContext);

    return (
        <>
            <UsersHeader>All Users</UsersHeader>
            {value.state.usersData.map(item => {
                if (!item.added) {
                    return <User key={item.id} item={item} />   
                }
            })}
        </>
    );
}

const UsersHeader = styled.h3`
    text-align: center;
    margin-bottom: 10px;
`
