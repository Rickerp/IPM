import React, { useContext } from 'react'
import { AppContext } from "../context"
import styled from "styled-components"
import { Spring } from "react-spring/renderprops"

export default function Location(props) {
    const value = useContext(AppContext);

    return (
        <Spring
        from={{ opacity: 0, marginTop: -10 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ duration: 600 }}
        >
            {styledProps => <LocationWrapper style={styledProps}>
                <div className="location" onClick={() => value.changeLocation(props.item.name)}>
                    {props.item.name === props.currentLocation ? <img src={props.item.selected} alt={props.item.name}></img> : 
                    <img src={props.item.image} alt={props.item.name}></img>}
                </div>
            </LocationWrapper>}
        </Spring>
    )
}

const LocationWrapper = styled.div`
    cursor: pointer;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 1fr;
    grid-template-rows: 70px;
    grid-template-areas: 
        "location";
`

