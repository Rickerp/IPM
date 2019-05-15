import React, { useContext } from 'react'
import { AppContext } from "../context"
import styled from "styled-components"

export default function RouteViewer(props) {
    const value = useContext(AppContext)

    return (
        <>
            <MapsWrapper>
                <div className="maps-image">
                    {value.state.blind ? <img src={props.location.state.route + "_blind.png"} alt="F4"></img> : <img src={props.location.state.route + ".png"} alt="F4"></img>}
                </div>
                <div className="maps-blind">
                    <i class="far fa-eye" onClick={() => value.toggleBlind()}></i>
                </div>
                <div className="maps-share">
                    <i class="fas fa-share-alt"></i>
                </div>
            </MapsWrapper>  
        </>
    )
}

const MapsWrapper = styled.div`
    position: fixed; 
    margin-top: -9px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 30px;
    grid-template-areas: 
        "maps-image maps-image maps-image maps-image"
        "maps-blind maps-blind maps-share maps-share";
`
