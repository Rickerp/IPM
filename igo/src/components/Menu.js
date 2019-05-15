import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Slide } from "react-burger-menu";
import rita from "../Rita.png";
import styled from "styled-components";

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            languagesOpen: false
        };
    }

    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen });
    }

    closeMenu() {
        this.setState({
            menuOpen: false,
            languagesOpen: false
        });
    }

    toggleMenu() {
        this.setState({ menuOpen: !this.state.menuOpen });
    }

    toggleLanguages() {
        this.setState({ languagesOpen: !this.state.languagesOpen });
    }

    render() {
        return (
            <SlideWrapper isOpen={this.state.menuOpen}>
                <Slide
                    isOpen={this.state.menuOpen}
                    onStateChange={state => this.handleStateChange(state)}
                    width={"180px"}
                >
                    <ProfileCard>
                        <p className="card-name">Rita Sousa</p>
                        <img className="card-avatar" src={rita} alt="Avatar" />
                    </ProfileCard>

                    <Link
                        onClick={() => {
                            this.closeMenu();
                            this.props.keyboardToggle(false);
                        }}
                        className="menu-item"
                        to="/ar"
                    >
                        <MapsItem currentPath={window.location.pathname}>
                            <i class="fas fa-landmark" /> &nbsp; LANDMARKS
                        </MapsItem>
                    </Link>

                    <a
                        className="menu-item"
                        href="#"
                        onClick={() => this.toggleLanguages()}
                    >
                        <LanguagesItem currentPath={window.location.pathname}>
                            <i className="fas fa-language" /> &nbsp; LANGUAGES{" "}
                            {this.state.languagesOpen ? (
                                <i className="fas fa-sort-up menu-up" />
                            ) : (
                                <i className="fas fa-sort-down menu-down" />
                            )}
                        </LanguagesItem>
                    </a>

                    {this.state.languagesOpen ? (
                        <Link
                            onClick={() => {
                                this.closeMenu();
                                this.props.keyboardToggle(false);
                            }}
                            className="menu-item"
                            to="/dictionary"
                        >
                            <DictionaryItem
                                currentPath={window.location.pathname}
                            >
                                <i className="fas fa-book" /> &nbsp; DICTIONARY
                            </DictionaryItem>
                        </Link>
                    ) : (
                        <span />
                    )}

                    {this.state.languagesOpen ? (
                        <Link
                            onClick={() => {
                                this.closeMenu();
                                this.props.keyboardToggle(false);
                            }}
                            className="menu-item"
                            to="/translator"
                        >
                            <TranslatorItem
                                currentPath={window.location.pathname}
                            >
                                <i className="fas fa-sign-language" /> &nbsp;
                                TRANSLATOR
                            </TranslatorItem>
                        </Link>
                    ) : (
                        <span />
                    )}

                    <Link
                        onClick={() => {
                            this.closeMenu();
                            this.props.keyboardToggle(false);
                        }}
                        className="menu-item"
                        to="/sharoute"
                    >
                        <SharouteItem currentPath={window.location.pathname}>
                            <i className="fas fa-route" /> &nbsp; SHAROUTE
                        </SharouteItem>
                    </Link>

                    <Link
                        onClick={() => {
                            this.closeMenu();
                            this.props.keyboardToggle(false);
                        }}
                        className="menu-item"
                        to="/friends"
                    >
                        <FriendsItem currentPath={window.location.pathname}>
                            <i className="fas fa-user-friends" /> &nbsp; FRIENDS
                        </FriendsItem>
                    </Link>
                </Slide>
            </SlideWrapper>
        );
    }
}

const SlideWrapper = styled.div`
    /* Individual item */
    .bm-item {
        display: inline-block;

        /* Our sidebar item styling */
        text-decoration: none;
        margin-bottom: 15px;
        color: #c4bfc8;
        transition: color 0.2s;
    }

    /* Change color on hover */
    .bm-item:hover {
        color: var(--mainWhite);
    }

    .bm-item:focus {
        outline: none;
    }

    /* Position and sizing of burger button */
    .bm-burger-button {
        position: absolute;
        width: 13px;
        height: 9px;
        top: 8px;
        left: 3px;
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
        background: #373a47;
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
        height: 24px;
        width: 24px;
    }

    /* Color/shape of close button cross */
    .bm-cross {
        display: ${props => (props.isOpen ? "flex" : "none")};
        background: var(--mainWhite);
        zoom: 90% !important;
        margin-left: 5px;
    }

    /* General sidebar styles */
    .bm-menu {
        display: ${props => (props.isOpen ? "flex" : "none")};
        background: rgba(0, 0, 0, 0.9);
        padding: 4em 1em 0;
        font-size: 100%;
        font-weight: 500;
        height: 371px !important;
    }

    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
        fill: #373a47;
    }

    /* Wrapper for item list */
    .bm-item-list {
        color: #b8b7ad;
    }

    /* Styling of overlay */
    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
        width: 230px !important;
        height: 371px !important;
    }
`;

const ProfileCard = styled.div`
    position: relative !important;
    display: grid !important;
    grid-gap: 5px !important;
    grid-template-columns: 10px 120px !important;
    grid-template-rows: 30px 10px 5px !important;
    grid-template-areas:
        "card-avatar card-name"
        ". ."
        ". ." !important;
    top: -10px;
    border-bottom: 0.1px solid var(--mainWhite);
`;

const MapsItem = styled.span`
    color: ${props =>
        props.currentPath === "/ar" ? "var(--mainWhite)" : "#C4BFC8"};

    &:hover {
        color: var(--mainWhite);
    }
`;

const LanguagesItem = styled(MapsItem)`
    color: ${props =>
        props.currentPath === "/dictionary" ||
        props.currentPath === "/translator" ||
        props.currentPath === "/translatorar"
            ? "var(--mainWhite)"
            : "#C4BFC8"};
`;

const DictionaryItem = styled(MapsItem)`
    color: ${props =>
        props.currentPath === "/dictionary" ? "var(--mainWhite)" : "#C4BFC8"};
`;

const TranslatorItem = styled(MapsItem)`
    color: ${props =>
        props.currentPath === "/translator" ||
        props.currentPath === "/translatorar"
            ? "var(--mainWhite)"
            : "#C4BFC8"};
`;

const SharouteItem = styled(MapsItem)`
    color: ${props =>
        props.currentPath === "/sharoute" || props.currentPath === "/popularroutes" || props.currentPath === "/myroutes" || props.currentPath === "/friendsroutes" || props.currentPath === "/maps" ? "var(--mainWhite)" : "#C4BFC8"};
`;

const FriendsItem = styled(MapsItem)`
    color: ${props =>
        props.currentPath === "/friends" ? "var(--mainWhite)" : "#C4BFC8"};
`;
