import React, { Component } from "react";
import { AppConsumer } from "../context";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";
import Popup from "reactjs-popup";

export default class Maps extends Component {
    state = {
        sharePopupOpen: false,
        savePopupOpen: false
    };
    openSharePopup(routeName) {
        if (routeName)
            this.setState({ sharePopupOpen: true });
    }

    closeSharePopup() {
        this.setState({ sharePopupOpen: false });
    }
    openSavePopup(routeName) {
        if (routeName)
            this.setState({ savePopupOpen: true });
    }

    closeSavePopup() {
        this.setState({ savePopupOpen: false });
    }

    render() {
        return (
            <>
                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    config={{ delay: 100, duration: 900 }}
                >
                    {styledProps => (
                        <AppConsumer>
                            {value => (               
                                <MapsWrapper style={styledProps}>
                                    <div className="maps-image">
                                        {value.state.currentRoute === 0 ? (
                                            value.state.routesData.map(item => {
                                                if (
                                                    item.city ===
                                                    value.state.location
                                                ) {
                                                    return value.state.blind ? (
                                                        <img
                                                            src={
                                                                item.default +
                                                                "_blind.png"
                                                            }
                                                            alt="Mapa"
                                                            draggable="false"
                                                        />
                                                    ) : (
                                                        <img
                                                            src={
                                                                item.default +
                                                                ".png"
                                                            }
                                                            alt="Mapa"
                                                            draggable="false"
                                                        />
                                                    );
                                                }
                                            })
                                        ) : value.state.blind ? (
                                            <img
                                                src={
                                                    value.state.currentRoute +
                                                    "_blind.png"
                                                }
                                                alt="Mapa"
                                                draggable="false"
                                            />
                                        ) : (
                                            <img
                                                src={
                                                    value.state.currentRoute +
                                                    ".png"
                                                }
                                                alt="Mapa"
                                                draggable="false"
                                            />
                                        )}
                                    </div>
                                    <div className="maps-marker">
                                        <i
                                            class="fas fa-map-marker"
                                            onClick={() => value.changeRoute()}
                                        />
                                    </div>
                                    <div className="maps-blind">
                                        <i
                                            class="far fa-eye"
                                            onClick={() => value.toggleBlind()}
                                        />
                                    </div>

                                <Popup
                                    open={this.state.savePopupOpen}
                                    position="top"
                                    overlayStyle={{
                                        width: "230px",
                                        height: "341px",
                                        margin: "auto",
                                        marginTop: "-1",
                                        position: "absolute",
                                        top: "0"
                                    }}
                                    closeOnDocumentClick={false}
                                    contentStyle={{
                                        margin: "auto",
                                        padding: "10px",
                                        maxHeight: "300px",
                                        overflowY: "auto",
                                        overflowX: "hidden",
                                        maxWidth: "230px",
                                        fontSize: "13px",
                                        border: "1px solid black",
                                        borderRadius: "20px",
                                        width: "200px",
                                        textAlign: "center"
                                    }}
                                >
                                    <i
                                        style={{
                                            cursor: "pointer",
                                            position: "absolute",
                                            left: "195px",
                                            margin: "2px"
                                        }}
                                        onClick={() => this.closeSavePopup()}
                                        class="fas fa-times"
                                    />
                                    <div className="word-input">
                                        <Box
                                            invalidInput={this.state.invalidInput}
                                            success={this.state.success}
                                        >
                                            <form>
                                                <TextInput
                                                    type="text"
                                                    value={this.props.keyboardInput}
                                                    onClick={
                                                        this.props.keyboardToggle
                                                    }
                                                    placeholder="Route name"
                                                />
                                            </form>
                                        </Box>
                                    </div>
                                    <br />
                                    <ButtonBetter
                                        onClick={() => {
                                            value.saveRoute(
                                                value.state.currentRoute,
                                                this.props.keyboardInput
                                            );
                                            this.closeSavePopup();
                                        }}
                                    >
                                        CONFIRM
                                    </ButtonBetter>
                                </Popup>
                                <MapsOptions className="maps-save" currentRoute={value.state.currentRoute}>
                                    <i
                                        class="far fa-save"
                                        onClick={() => this.openSavePopup(value.state.currentRoute)}
                                    />
                                </MapsOptions>

                                <Popup
                                    open={this.state.sharePopupOpen}
                                    position="top center"
                                    overlayStyle={{
                                        width: "230px",
                                        height: "341px",
                                        margin: "auto",
                                        marginTop: "-1",
                                        position: "absolute",
                                        top: "0"
                                    }}
                                    closeOnDocumentClick={false}
                                    contentStyle={{
                                        padding: "2px",
                                        maxHeight: "300px",
                                        overflowY: "auto",
                                        overflowX: "hidden",
                                        maxWidth: "130px",
                                        fontSize: "13px",
                                        border: "1px solid black",
                                        textAlign: "center"
                                    }}
                                >
                                    Shared successfully
                                    <br />
                                    <br />
                                    <ButtonBetter
                                        onClick={() => {
                                            this.closeSharePopup();
                                        }}
                                    >
                                        OK
                                    </ButtonBetter>
                                </Popup>
                                <MapsOptions className="maps-share" currentRoute={value.state.currentRoute}>
                                    <i
                                        class="fas fa-share-alt"
                                        onClick={() => this.openSharePopup(value.state.currentRoute)}
                                    />
                                </MapsOptions>
                            </MapsWrapper>
                            )}
                        </AppConsumer>)}
                </Spring>
            </>
        );
    }
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
`;

const Box = styled.div`
    border: ${props =>
        props.invalidInput
            ? "1px solid var(--mainRed)"
            : props.success
            ? "1px solid var(--mainGreen)"
            : "1px solid var(--mainBlack)"};
    border-radius: 10px;
    height: 22px;
    width: 150px;
    margin: auto;

    .fa-search {
        color: ${props => (props.invalidInput ? "grey" : "black")};
    }
`;

const TextInput = styled.input`
    font-family: "Montserrat";
    background-color: transparent;
    width: 100px;
    margin-left: 10px;
    border: none;

    &:focus {
        outline: none;
    }
`;

const ButtonBetter = styled.button`
    font-family: "Montserrat";
    font-size: 12px;
    background: transparent;
    border: 1px solid black;
    border-radius: 10px;
`;

const MapsOptions = styled.div`
    i {
        color: ${props => (props.currentRoute ? "var(--mainBlack)" : "grey")};
    }
`;
