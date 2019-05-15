import React, { useContext } from 'react'
import { AppContext } from "../context"
import RoutesList from './RoutesList';
import rotas from '../PopularRoutesData';
import RouteCard from './RouteCard';

export default function PopularRoutes() {
    const value = useContext(AppContext);

    return (
        <>
            <RoutesList header="Popular Routes" routes={rotas}></RoutesList>
        </>
    )
}
