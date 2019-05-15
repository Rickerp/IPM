import React from 'react'
import styled from "styled-components"
import rita from "../Ellipse.png"

export default function RouteCard() {
    return (
        <RouteCardWrapper>
            <Avatar className="route-avatar">
                <AvatarImg className="cona" src={rita} alt="Rita"></AvatarImg>
            </Avatar>
            <InsideWrapper className="route-inside">
                <div className="route-author">
                    <RouteAuthor>Artur</RouteAuthor>
                </div>
                <div className="route-rating">
                    <RouteRating>
                        <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                    </RouteRating>
                </div>
                <div className="route-details">
                    <RouteName>Porto Tour &nbsp;<i class="fas fa-circle"></i>&nbsp; 5KM</RouteName>
                </div>
            </InsideWrapper>
        </RouteCardWrapper>
    )
}

const RouteCardWrapper = styled.div`
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 5px 10px 1fr 5px;
    grid-template-rows: 59px;
    grid-template-areas: 
        ". route-avatar route-inside .";
`

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
`

const Avatar = styled.div`
    display: block;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
`

const RouteAuthor = styled.p`
    font-size: 95%;
    font-weight: 700;
    margin-top: -1px;
`

const RouteRating = styled.p`
    font-size: 45%;
    margin-top: 5px;
    text-align: right;
    margin-right: 4px;
`

const RouteName = styled.p`
    font-size: 80%;
    margin-top: -1px;

    i {
        position: relative;
        top: -1px;
        font-size: 5%;
    }
`

const AvatarImg = styled.img`
    border: 1px solid var(--mainBlack);
    border-radius: 100%;
`
