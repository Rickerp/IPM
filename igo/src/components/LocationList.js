import React, { useContext } from 'react'
import { AppContext } from "../context"
import styled from "styled-components"
import Location from "./Location"

export default function LocationList(props) {
    const value = useContext(AppContext);

    return (
        <>
            <LocationHeader>Select a Location</LocationHeader>
            <Location></Location>
        </>
    )
}

const LocationHeader = styled.h3`
    text-align: center;
    margin-bottom: 10px;
`
