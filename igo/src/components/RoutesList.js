import React from 'react'
import styled from "styled-components"
import RouteCard from './RouteCard';


export default function RoutesList(props) {
    return (
        <>
            <RoutesListHeader>{props.header}</RoutesListHeader>
            <RouteCard></RouteCard>
        </>
    )
}

const RoutesListHeader = styled.h3`
    text-align: center;
    margin-bottom: 10px;
`
