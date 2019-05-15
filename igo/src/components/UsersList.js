import React, { Component } from "react";
import User from "./User";
import styled from "styled-components";
import { AppConsumer } from "../context";

export default class UsersLists extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				<UsersHeader>All Users</UsersHeader>
				<div className="word-input">
					<Box>
						<form>
							<TextInput
								type="text"
								value={this.props.keyboardInput}
								onClick={this.props.keyboardToggle}
								placeholder="Search a user"
							/>
							<SearchButton type="submit" value="Submit">
								<i className="fas fa-search" />
							</SearchButton>
						</form>
					</Box>
				</div>
				<AppConsumer>
					{value => {
						return value.state.usersData.map(item => {
							if (
								!item.added &&
								item.name
									.toUpperCase()
									.includes(this.props.keyboardInput)
							) {
								return <User key={item.id} item={item} />;
							}
						});
					}}
				</AppConsumer>
			</>
		);
	}
}

const UsersHeader = styled.h3`
	text-align: center;
	margin-bottom: 10px;
`;

/*const TextAlert = styled.p`
	display: ${props => (props.invalidInput ? "block" : "none")};
	font-size: 14px;
	text-align: left;
	margin-left: 18px;
`;*/

const TextInput = styled.input`
	font-family: "Montserrat";
	background-color: transparent;
	width: 150px;
	margin-left: 10px;
	border: none;

	&:focus {
		outline: none;
	}
`;

const SearchButton = styled.button`
	background-color: transparent;
	border: none;
	margin-left: 10px;
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
	width: 200px;
	margin-left: 15px;
	margin-bottom: 10px;

	.fa-search {
		color: ${props => (props.invalidInput ? "grey" : "black")};
	}
`;
