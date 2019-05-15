import React, { useContext } from 'react'
import { AppContext } from "../context"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Sharoute() {
    return (
        <SharouteWrapper>
            <div className="sharoute-header">
                <SharouteHeader>
                    Sharoute
                    <Link to="/location" style={{ textDecoration: 'none' }}> 
                        <i class="fas fa-ellipsis-v"></i>
                    </Link> 
                </SharouteHeader>
            </div>
            <div className="sharoute-popular">
                <Link to="/popularroutes" style={{ textDecoration: 'none' }}>
                    <Box>
                        <AddButton><i class="far fa-star"></i> Popular Routes</AddButton>
                    </Box>
                </Link>
            </div>
            <div className="sharoute-build">
                <Link to="/maps" style={{ textDecoration: 'none' }}>
                    <Box>
                        <AddButton><i class="fas fa-hammer"></i> Build a Route</AddButton>
                    </Box>
                </Link>
            </div>
            <div className="sharoute-mine">
                <Box>
                    <AddButton><i class="far fa-address-book"></i> My Routes</AddButton>
                </Box>
            </div>
            <div className="sharoute-friends">
                <Box>
                    <AddButton><i class="fas fa-user-friends"></i> Friends' Routes</AddButton>
                </Box>
            </div>
        </SharouteWrapper>
    )
}

const SharouteWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 10px 1fr 10px;
    grid-template-rows: repeat(5, 40px);
    grid-template-areas:
        "sharoute-header sharoute-header sharoute-header" 
        ". sharoute-popular ."
        ". sharoute-build ."
        ". sharoute-mine ."
        ". sharoute-friends .";
`

const SharouteHeader = styled.h3`
    position: relative;
    top: -15px;
    text-align: center;

    i {
        position: relative;
        left: 30px;
        font-size: 14px;
    }
`

const Box = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
    border: 1px solid var(--mainBlack);
    border-radius: 50px;
    height: 30px;
    width: 170px;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--mainBlack);
`

const AddButton = styled.button`
    font-family: "Montserrat"; 
    font-size: 16px;
    font-weight: 500;
    color: var(--mainWhite);
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        text-decoration: none;
    }

    i {
        position: relative;
        top: -2px;
        font-size: 10px;
    }
`
