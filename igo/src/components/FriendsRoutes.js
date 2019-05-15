import React, { useContext } from 'react'
import { AppContext } from "../context"
import RoutesList from './RoutesList';

export default function FriendsRoutes() {
    const value = useContext(AppContext);

    return (
        <>
            <RoutesList header="Friends' Routes" routes={value.state.friendsRoutesData} friends={true}></RoutesList>
        </>
    )
}
