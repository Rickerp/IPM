import React, { useContext } from 'react'
import { AppContext } from "../context"
import styled from "styled-components"
import Location from "./Location"

export default function LocationList(props) {
    const value = useContext(AppContext);

    return (
        <LocationListWrapper>
            <div className="location-list-locations">
                <LocationHeader>Select a Location</LocationHeader>
            </div>
            <div className="location-list-header">
                {value.state.locationsData.map(item => {
                    return <Location key={item.id} item={item} currentLocation={value.state.location}/>   
                })}
            </div>
        </LocationListWrapper>
    )
}

const LocationListWrapper = styled.div`
    position: fixed;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 10px 1fr 10px;
    grid-template-rows: 40px 1fr;
    grid-template-areas: 
        "location-list-locations location-list-locations location-list-locations"
        "location-list-header location-list-header location-list-header";
`

const LocationHeader = styled.h3`
    text-align: center;
    margin-top: -1px;
`
