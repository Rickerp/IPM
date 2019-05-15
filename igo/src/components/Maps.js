import React, { Component } from "react";
import { AppConsumer } from "../context";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";

export default class Maps extends Component {
    render() {
        return (
            <>
                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    config={{ delay: 100, duration: 900 }}
                >
                    {styledProps => <MapsWrapper style={styledProps}>
                        <AppConsumer>
                            {value => <div className="maps-image">
                                {value.state.currentRoute === 0 ? (
                                    value.state.routesData.map(item => {
                                        if (item.city === value.state.location) {
                                            return value.state.blind ? (
                                                <img
                                                    src={item.default + "_blind.png"}
                                                    alt="Mapa"
                                                    draggable="false"
                                                />
                                            ) : (
                                                <img
                                                    src={item.default + ".png"}
                                                    alt="Mapa"
                                                    draggable="false"
                                                />
                                            );
                                        }
                                    })
                                ) : value.state.blind ? (
                                    <img
                                        src={value.state.currentRoute + "_blind.png"}
                                        alt="Mapa"
                                        draggable="false"
                                    />
                                ) : (
                                    <img
                                        src={value.state.currentRoute + ".png"}
                                        alt="Mapa"
                                        draggable="false"
                                    />
                                )}
                            </div>}
                        </AppConsumer>
                        <AppConsumer>
                            {value => <div className="maps-marker">
                                <i
                                    class="fas fa-map-marker"
                                    onClick={() => value.changeRoute()}
                                />
                            </div>}
                        </AppConsumer>
                        <AppConsumer>
                            {value => <div className="maps-blind">
                                <i class="far fa-eye" onClick={() => value.toggleBlind()} />
                            </div>}
                        </AppConsumer>
                        <AppConsumer>
                            {value => <div className="maps-save">
                                <i
                                    class="far fa-save"
                                    onClick={() =>
                                        value.saveRoute(value.state.currentRoute)
                                    }
                                />
                            </div>}
                        </AppConsumer>
                        <div className="maps-share">
                            <i class="fas fa-share-alt" />
                        </div>
                    </MapsWrapper>}
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
