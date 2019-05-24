import React, { useContext } from "react";
import { AppContext } from "../context";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { Spring } from "react-spring/renderprops";

import styled from "styled-components";

export default function Sharoute() {
    const value = useContext(AppContext)

    return (
        <React.Fragment>
            <Popup
                trigger={
                    <i
                        class="fas fa-info-circle"
                        style={{
                            position: "absolute",
                            right: "40px",
                            top: "6px"
                        }}
                    />
                }
                position="bottom right"
                on="click"
                closeOnDocumentClick
                mouseLeaveDelay={300}
                mouseEnterDelay={0}
                contentStyle={{
                    marginTop: "3px",
                    padding: "2px",
                    maxHeight: "300px",
                    overflowY: "auto",
                    overflowX: "hidden",
                    maxWidth: "150px",
                    fontSize: "13px",
                    border: "1px solid black"
                }}
                arrow={true}
            >
                In this menu you will be able to check the most popular routes,
                build your very own route, check your own routes, or your
                friend's routes. By clicking on the current location button you will be able to
                select the location of your maps.
            </Popup>
            <Spring
            from={{ opacity: 0, marginLeft: -80 }}
            to={{ opacity: 1, marginLeft: 0 }}
            config={{ duration: 600 }}
            >
                {styledProps => <SharouteWrapper style={styledProps}>
                    <div className="sharoute-header">
                        <SharouteHeader>
                            Sharoute
                        </SharouteHeader>
                    </div>
                    <div className="sharoute-popular">
                        <Link
                            to="/popularroutes"
                            style={{ textDecoration: "none" }}
                        >
                            <Box>
                                <AddButton>
                                    <i class="far fa-star" /> Popular Routes
                                </AddButton>
                            </Box>
                        </Link>
                    </div>
                    <div className="sharoute-build">
                        <Link to="/location" style={{ textDecoration: "none" }}>
                            <Box>
                                <AddButton>
                                    <i class="fas fa-hammer" /> Build a Route
                                </AddButton>
                            </Box>
                        </Link>
                    </div>
                    <div className="sharoute-mine">
                        <Link to="/myroutes" style={{ textDecoration: "none" }}>
                            <Box>
                                <AddButton>
                                    <i class="far fa-address-book" /> My Routes
                                </AddButton>
                            </Box>
                        </Link>
                    </div>
                    <div className="sharoute-friends">
                        <Link
                            to="/friendsroutes"
                            style={{ textDecoration: "none" }}
                        >
                            <Box>
                                <AddButton>
                                    <i class="fas fa-user-friends" /> Friend's
                                    Routes
                                </AddButton>
                            </Box>
                        </Link>
                    </div>
                </SharouteWrapper>}
            </Spring>
        </React.Fragment>
    );
}

const SharouteWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 10px 1fr 10px;
    grid-template-rows: 28px repeat(4, 40px);
    grid-template-areas:
        "sharoute-header sharoute-header sharoute-header"
        ". sharoute-popular ."
        ". sharoute-build ."
        ". sharoute-mine ."
        ". sharoute-friends .";
`;

const SharouteHeader = styled.h3`
    position: relative;
    top: -15px;
    text-align: center;

    i {
        position: relative;
        left: 20px;
        top: -23px;
        font-size: 14px;
    }

    span {
        font-size: 12px;
        color: black;
        font-weight: 400;
    }
`;

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
`;

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
`;

const ButtonBetter = styled.button`
    cursor: pointer;
    font-weight: 700;
    color: white;
    font-family: "Montserrat";
    font-size: 12px;
    border: 1px solid black;
    border-radius: 10px;
    background: ${props => props.currentLocation === "Rome" ? "linear-gradient(90deg, #FFB347 0%, #FFCC33 100%)" : 
    props.currentLocation === "Lisbon" ? "linear-gradient(90deg, #E100FF 0%, #7F00FF 100%)" : 
    props.currentLocation === "Porto" ? "linear-gradient(90deg, #56CCF2 0%, #2F80ED 100%)" : "linear-gradient(90deg, #56AB2F 0%, #A8E063 100%)" };
`;
