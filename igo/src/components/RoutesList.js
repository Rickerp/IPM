import React, { useContext } from 'react'
import { AppContext } from "../context"
import styled from "styled-components"
import RouteCard from './RouteCard';

export default function RoutesList(props) {
    const value = useContext(AppContext);

    return (
        <>
            <RoutesListHeader>{props.header}</RoutesListHeader>
            {props.friends ? props.routes.map(item => {
                    if (value.isAdded(item.userId))
                        return <RouteCard key={item.id} item={item} /> 
                }) : props.routes.map(item => {
                    return <RouteCard key={item.id} item={item} />
                })
            }
        </>
    )
}

const RoutesListHeader = styled.h3`
    text-align: center;
    margin-bottom: 20px;
`
