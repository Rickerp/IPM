import React, { useContext } from 'react'
import { AppContext } from "../context"
import styled from "styled-components"

export default function Location(props) {
    const value = useContext(AppContext);

    return (
        <LocationWrapper>
            <div className="location" onClick={() => value.changeLocation(props.item.name)}>
                <img src={props.item.image} alt={props.item.name}></img>
            </div>
        </LocationWrapper>
    )
}

const LocationWrapper = styled.div`
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 1fr;
    grid-template-rows: 70px;
    grid-template-areas: 
        "location";
`

