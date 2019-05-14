import React, { useContext } from 'react'
import { AppContext } from "../context";
import styled from "styled-components"

export default function Profile(props) {
    const value = useContext(AppContext);
    const profileBg = value.getProfileBg(props.location.state.userId);

    return (
        <ProfileWrapper>
            <div className="profile-avatar">
                <img src={profileBg} alt="Person"></img>
            </div>
            <div className="profile-name">
                <NameText>{props.location.state.name}</NameText>
            </div>
            <div className="profile-status">
                <StatusText>Online <i class="fas fa-circle"></i></StatusText>
            </div>
            <div className="profile-routes">
                <RoutesText>Routes <i class="fas fa-route"></i></RoutesText>
                <RoutesCounterText>10</RoutesCounterText>
            </div>
            <div className="profile-posts">
                <PostsText>Posts <i class="far fa-comments"></i></PostsText>
                <PostsCounterText>10</PostsCounterText>
            </div>
            <div className="profile-remove">
                <RemoveText><i class="fas fa-user-times"></i> Remove Friend</RemoveText>
            </div>
        </ProfileWrapper>
    )
}

const ProfileWrapper = styled.div`
    margin-top: -10px;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 5px 1fr 10px 1fr 5px;
    grid-template-rows: 100px 20px 20px 10px 110px 40px;
    grid-template-areas: 
        "profile-avatar profile-avatar profile-avatar profile-avatar profile-avatar"
        "profile-name profile-name profile-name profile-name profile-name"
        "profile-status profile-status profile-status profile-status profile-status"
        ". . . . ."
        ". profile-routes . profile-posts ."
        "profile-remove profile-remove profile-remove profile-remove profile-remove";
`

const NameText = styled.p`
    font-size: 100%;
    font-weight: 700;
    text-align: center;
    margin-top: -1px;
`

const RemoveText = styled.p`
    font-size: 100%;
    font-weight: 500;
    text-align: center;

    i {
        font-size: 90%;
    }
`

const StatusText = styled.p`
    font-size: 80%;
    margin-top: -1px;
    text-align: center;

    i {
        position: relative;
        top: -1px;
        font-size: 50%;
        color: var(--mainGreen);
    }
`

const RoutesText = styled.p`
    font-size: 95%;
    font-weight: 700;
    text-align: center;
`

const RoutesCounterText = styled.p`
    font-size: 95%;
    font-weight: 400;
    text-align: center;
    margin-top: -4px;
`

const PostsText = styled.p`
    font-size: 95%;
    font-weight: 700;
    text-align: center;
`

const PostsCounterText = styled.p`
    font-size: 95%;
    font-weight: 400;
    text-align: center;
    margin-top: -4px;
`
