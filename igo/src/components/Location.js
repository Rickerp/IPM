import React from 'react'
import styled from "styled-components"
import rome from "../Rome.png"

export default function Location() {
    return (
        <LocationWrapper>
            <div className="location">
                <img src={rome} alt="Rome"></img>
                <p>Rome</p>
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

    p {
        text-align: center;
        font-weight: 500;
        color: var(--mainWhite);
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

