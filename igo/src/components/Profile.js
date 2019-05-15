import React, { Component } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import { AppConsumer } from "../context";

export default class Profile extends Component {
	state = {
		openRemove: false
	};

	styles = {
		background: {
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			position: "absolute",
			height: "341px",
			width: "230px",
			top: "30px",
			left: "0px"
		},
		avatar: {
			height: "100px",
			width: "100px",
			margin: "auto",
			marginTop: "5px",
			marginBottom: "5px",
			zIndex: 30
		}
	};

	openRemove() {
		this.setState({ openRemove: true });
	}

	closeRemove() {
		this.setState({ openRemove: false });
	}

	handleRemove() {
		this.props.selfToggle();
		this.props.onRemove();
	}

	getStatus() {
		if (this.props.status) return { visibility: "visible" };
		else return { visibility: "hidden" };
	}

	render() {
		return (
			<div style={this.getStatus()}>
				<div style={this.styles.background}>
					<CloseButton>
						<i
							onClick={() => this.props.selfToggle()}
							class="far fa-times-circle"
						/>
					</CloseButton>
					<AppConsumer>
						{value => (
							<ProfileWrapper>
								<ProfileBanner
									style={{
										backgroundColor: value.getProfileBg(
											this.props.item.userId
										)
									}}
								/>
								<div
									className="profile-avatar"
									style={this.styles.avatar}
								>
									<img
										style={{
											maxWidth: "96%",
											maxHeight: "96%",
											borderRadius: "50%",
											border: "2px solid black"
										}}
										src={this.props.item.avatar}
										alt="Person"
									/>
								</div>
								<div className="profile-status">
									<StatusText
										online={value.getStatus(
											this.props.item.userId
										)}
									>
										{value.getStatus(this.props.item.userId)
											? "Online"
											: "Offline"}
										{"  "}
										<i class="fas fa-circle" />
									</StatusText>
								</div>
								<div className="profile-name">
									<NameText>{this.props.item.name}</NameText>
								</div>
								<div className="profile-description">
									<DescriptionText>
										{this.props.item.description}
									</DescriptionText>
								</div>
								<div className="profile-routes">
									<RoutesText>
										Routes <i class="fas fa-route" />
									</RoutesText>
									<RoutesCounterText>10</RoutesCounterText>
								</div>
								<div className="profile-posts">
									<PostsText>
										Posts <br />{" "}
										<i class="far fa-comments" />
									</PostsText>
									<PostsCounterText>10</PostsCounterText>
								</div>
								<div className="profile-remove">
									<RemoveText>
										<i
											style={{ cursor: "pointer" }}
											onClick={() => this.openRemove()}
											class="fas fa-user-times"
										/>
										<Popup
											open={this.state.openRemove}
											position="top center"
											overlayStyle={{
												width: "230px",
												height: "341px",
												margin: "auto",
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
											Are you sure you want to remove this
											friend?
											<br />
											<button
												onClick={() => {
													this.closeRemove();
													this.handleRemove();
												}}
											>
												Yes
											</button>
											<button
												onClick={() =>
													this.closeRemove()
												}
											>
												No
											</button>
										</Popup>
									</RemoveText>
								</div>
								<div className="profile-edit">
									<EditText>
										<i
											style={{ cursor: "pointer" }}
											class="fas fa-pencil-alt"
										/>
									</EditText>
								</div>
							</ProfileWrapper>
						)}
					</AppConsumer>
				</div>
			</div>
		);
	}
}

const CloseButton = styled.div`
	position: absolute;
	top: 15px;
	right: 15px;
	z-index: 30;
	color: white;
	background-color: black;
	font-size: 20px;
	border-radius: 50%;
	height: 20px;
	cursor: pointer;
`;

const ProfileWrapper = styled.div`
	display: grid;
	grid-gap: 3px;
	grid-template-columns: 5px 1fr 10px 1fr 5px;
	grid-template-rows: 119px 20px 15px 27px 65px 20px;
	grid-template-areas:
		"profile-avatar profile-avatar profile-avatar profile-avatar profile-avatar"
		"profile-name profile-name profile-name profile-name profile-name"
		"profile-description profile-description profile-description profile-description profile-description"
		"profile-status profile-status profile-status profile-status profile-status"
		". profile-routes . profile-posts ."
		". profile-remove . profile-edit .";
	margin: 20px;
	background-color: white;
	padding: 10px;
	border-radius: 20px;
	border: 0.5px solid black;
	overflow: hidden;
`;

const ProfileBanner = styled.div`
	position: absolute;
	height: 59px;
	width: 188.5px;
	left: 20px;
	top: 20px;
	border-radius: 20px 20px 0px 0px;
	border: 0.5px solid black;
`;

const NameText = styled.p`
	font-size: 100%;
	font-weight: 700;
	text-align: center;
	margin: auto;
	margin-top: 0;
	margin-bottom: 0;
`;

const DescriptionText = styled.p`
	font-size: 75%;
	text-align: center;
	margin-top: -2px;
	margin-bottom: 0;
`;

const RemoveText = styled.p`
	text-align: right;
	margin-top: 0;
	margin-bottom: 0;
	font-size: 90%;
`;

const EditText = styled.p`
	text-align: left;
	margin-top: 0;
	margin-bottom: 0;
	font-size: 90%;
`;

const StatusText = styled.p`
	font-size: 80%;
	text-align: center;

	i {
		position: relative;
		top: -1px;
		font-size: 50%;
		color: ${props =>
			props.online ? "var(--mainGreen)" : "var(--mainRed)"};
	}
	margin-top: 0;
	margin-bottom: 0;
`;

const RoutesText = styled.p`
	font-size: 95%;
	font-weight: 700;
	text-align: center;
	margin-top: 0px;
	margin-bottom: 0px;
`;

const RoutesCounterText = styled.p`
	font-size: 95%;
	font-weight: 400;
	text-align: center;
	margin-top: 0px;
	margin-bottom: 0px;
`;

const PostsText = styled.p`
	font-size: 95%;
	font-weight: 700;
	text-align: center;
	margin-top: 0px;
	margin-bottom: 0px;
`;

const PostsCounterText = styled.p`
	font-size: 95%;
	font-weight: 400;
	text-align: center;
	margin-top: 0px;
	margin-bottom: 0px;
`;
