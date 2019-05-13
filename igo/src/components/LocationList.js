import React, { useContext } from 'react'
import { AppContext } from "../context"
import styled from "styled-components"
import Location from "./Location"

export default function LocationList(props) {
    const value = useContext(AppContext);

    return (
        <>
            <LocationHeader>Select a Location</LocationHeader>
            {value.state.locationsData.map(item => {
                return <Location key={item.id} item={item} />   
            })}
        </>
    )
}

const LocationHeader = styled.h3`
    text-align: center;
    margin-bottom: 20px;
`
