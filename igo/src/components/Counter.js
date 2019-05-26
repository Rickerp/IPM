import React, { useContext } from "react"
import { AppContext } from "../context"
import styled from "styled-components"

const Counter = () => {
    const value = useContext(AppContext)

    return (
        <CounterWrapper className="counter">
            <h3>Counter</h3>
            <p>{value.state.counter}</p>
            
        </CounterWrapper>
    )
}

export default Counter

const CounterWrapper = styled.div`
    position: relative;
    left: 100px;
`
