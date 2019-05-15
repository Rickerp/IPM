import React, { useContext } from 'react'
import { AppContext } from "../context"
import rotas from "../RoutesInfo"

export default function Maps() {
    const value = useContext(AppContext)

    return (
        <>  
            <img src={value.state.routesData[0].route1 + ".png"} alt="F4"></img>
        </> 
    )
}
