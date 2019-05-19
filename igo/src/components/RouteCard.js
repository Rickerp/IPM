import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import Rating from "./Rating";

export default function RouteCard(props) {
    return (
        <Spring
            from={{ opacity: 0, marginTop: -20 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ duration: 500 }}
        >
            {springProps => (
                <div style={springProps}>
                    <Link
                        to={{
                            pathname: props.item.routeName,
                            state: {
                                route: props.item.route,
                                name: props.item.routeName
                            }
                        }}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <RouteCardWrapper>
                            <Avatar className="route-avatar">
                                <AvatarImg src={props.item.avatar} alt="Rita" />
                            </Avatar>
                            <InsideWrapper className="route-inside">
                                <div className="route-author">
                                    <RouteAuthor>{props.item.name}</RouteAuthor>
                                </div>
                                <div className="route-rating">
                                    <RouteRating>
                                        <Rating rating={props.item.rating}></Rating>
                                    </RouteRating>
                                </div>
                                <div className="route-details">
                                    <RouteName>
                                        {props.item.routeName} &nbsp;
                                        <svg height="6" width="6">
                                            <circle cx="3" cy="3" r="2"/>
                                        </svg>
                                        &nbsp; {props.item.lenght}KM
                                    </RouteName>
                                </div>
                            </InsideWrapper>
                        </RouteCardWrapper>
                    </Link>
                </div>
            )}
        </Spring>
    );
}

const RouteCardWrapper = styled.div`
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 5px 10px 1fr 5px;
    grid-template-rows: 59px;
    grid-template-areas: ". route-avatar route-inside .";
    text-decoration: none;
    margin-bottom: 15px;
`;

const InsideWrapper = styled.div`
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 52px 1fr 1fr;
    grid-template-rows: repeat(2, 35px);
    grid-template-areas:
        ". route-author route-rating"
        ". route-details route-details";
    box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`;

const Avatar = styled.div`
    display: block;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
`;

const RouteAuthor = styled.p`
    font-size: 95%;
    font-weight: 700;
    margin-top: -1px;
`;

const RouteRating = styled.p`
    font-size: 45%;
    margin-top: 5px;
    text-align: right;
    margin-right: 4px;
`;

const RouteName = styled.p`
    font-size: 80%;
    margin-top: -1px;
    text-transform: capitalize;

    circle {
        color: black;
    }
`;

const AvatarImg = styled.img`
    border: 1px solid var(--mainBlack);
    border-radius: 100%;
`;
