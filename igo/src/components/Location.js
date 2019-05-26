import React, { useContext } from 'react'
import { AppContext } from "../context"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Spring } from "react-spring/renderprops"
import AnimatedImage from "./AnimatedImage"

export default function Location(props) {
    const value = useContext(AppContext);

    return (
        <Spring
        from={{ opacity: 0, marginTop: -10 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ duration: 600 }}
        >
            {styledProps => <LocationWrapper style={styledProps}>
                <Link to="/maps">
                    <div className="location" onClick={() => {
                        value.changeLocation(props.item.name)
                        value.increaseCounter()
                        }}>
                        {props.item.name === props.currentLocation ? <AnimatedImage image={props.item.selected} name={props.item.name}></AnimatedImage> : 
                        <AnimatedImage image={props.item.image} name={props.item.name}></AnimatedImage>}
                    </div>
                </Link>
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

