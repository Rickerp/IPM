import React, { useContext } from 'react'
import { AppContext } from "../context"
import styled from "styled-components"

export default function Maps() {
    const value = useContext(AppContext)

    return (
        <>
            <MapsWrapper>
                <div className="maps-image">
                    {value.state.currentRoute === 0  ? value.state.routesData.map(item => {
                        if (item.city === value.state.location) {
                            return value.state.blind ? <img src={item.default + "_blind.png"} alt="F4"></img> : <img src={item.default + ".png"} alt="F4"></img>
                        }
                        }) : value.state.blind ? <img src={value.state.currentRoute + "_blind.png"} alt="F4"></img> : <img src={value.state.currentRoute + ".png"} alt="F4"></img>
                    }
                </div>
                <div className="maps-marker">
                    <i class="fas fa-map-marker" onClick={() => value.changeRoute()}></i>
                </div>
                <div className="maps-blind">
                    <i class="far fa-eye" onClick={() => value.toggleBlind()}></i>
                </div>
                <div className="maps-save">
                    <i class="far fa-save"> onClick={() => value.saveRoute()}</i>
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
        "maps-marker maps-blind maps-save maps-share";
`
