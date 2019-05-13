import React, { useContext } from 'react'
import { AppContext } from "../context"
import RoutesList from './RoutesList';

export default function PopularRoutes() {
    const value = useContext(AppContext);

    return (
        <>
            <RoutesList header="Popular Routes"></RoutesList>
        </>
    )
}
