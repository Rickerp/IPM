import React, { Component } from "react";
import { AppContext, AppConsumer } from "../context";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";
import Profile from "./Profile";

export default class User extends Component {
	state = {
		profile: false
	};

	toggleProfile() {
		this.setState({ profile: !this.state.profile });
		this.props.setBack(() => this.toggleProfile());
	}

	render() {
		return (
			<Spring
				from={{ opacity: 0, marginTop: -20 }}
				to={{ opacity: 1, marginTop: 0 }}
			>
				{springProps => (
					<div style={springProps}>
						<UserWrapper>
							<Avatar className="user-avatar">
								<img
									style={{
										maxWidth: "100%",
										maxHeight: "100%",
										borderRadius: "50%"
									}}
									src={this.props.item.avatar}
									alt="User"
								/>
							</Avatar>
							<div className="user-name">
								<NameText>{this.props.item.name}</NameText>
							</div>
							<div className="user-description">
								<DescriptionText>
									{this.props.item.description}
								</DescriptionText>
							</div>
							<AppConsumer>
								{value => (
									<UserOptions className="user-options">
										{this.props.item.added ? (
											<i
												className="fas fa-cog"
												onClick={() => {
													/*value.removeFriend(
														this.props.item.id,
														this.props.item.userId
													)*/
													this.toggleProfile();
												}}
											/>
										) : (
											<i
												className="fas fa-plus-circle"
												onClick={() =>
													value.addFriend(
														this.props.item.id,
														this.props.item.userId
													)
												}
											/>
										)}
									</UserOptions>
								)}
							</AppConsumer>
						</UserWrapper>
						<Profile
							item={this.props.item}
							status={this.state.profile}
						/>
					</div>
				)}
			</Spring>
		);
	}
}

const UserWrapper = styled.div`
	display: grid;
	grid-gap: 3px;
	grid-template-columns: 40px 1fr 1fr 30px;
	grid-template-rows: 3px 30px 15px 3px;
	grid-template-areas:
		". . . ."
		"user-avatar user-name user-name user-options"
		"user-avatar user-description user-description user-options"
		". . . .";
`;

const Avatar = styled.div`
	margin-right: auto;
	margin-left: 10px;
	margin-top: auto;
	margin-bottom: auto;
`;

const NameText = styled.p`
	font-size: 100%;
	font-weight: 700;
	margin-left: 10px;
	margin-top: 5px;
	color: black;
	text-decoration: none;
`;

const DescriptionText = styled.p`
	font-size: 80%;
	margin-left: 10px;
	margin-top: -9px;
	color: black;
	text-decoration: none;
`;

const UserOptions = styled.div`
	display: block;
	margin-right: auto;
	margin-left: 5px;
	margin-top: auto;
	margin-bottom: auto;
	font-size: 90%;
`;
