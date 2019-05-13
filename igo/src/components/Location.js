import React from 'react'
import styled from "styled-components"

export default function Location(props) {
    return (
        <LocationWrapper>
            <div className="location">
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

