import React, { useContext } from 'react'
import { AppContext } from "../context"

export default function UsersLists() {
    const value = useContext(AppContext);

    return (
        <>
            {value.state.usersData.map(item => {
                if (!item.added) {
                    return <User key={item.id} item={item} />   
                }
            })}
        </>
    );
}
