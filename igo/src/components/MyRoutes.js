import React, { useContext } from 'react'
import { AppContext } from "../context"
import RoutesList from './RoutesList';
import rotas from '../PopularRoutesData';

export default function PopularRoutes() {
    const value = useContext(AppContext);

    return (
        <>
            <RoutesList header="My Routes" routes={rotas}></RoutesList>
        </>
    )
}
