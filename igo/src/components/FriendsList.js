import React, { useContext } from "react";
import { AppContext } from "../context";
import { Link } from "react-router-dom";
import User from "./User";
import styled from "styled-components";

export default function FriendsList(props) {
	const value = useContext(AppContext);

	return (
		<>
			<FriendsHeader>Friends</FriendsHeader>
			{value.state.usersData.map(item => {
				if (item.added) {
					return (
						<div
							style={{
								borderBottom: "1px solid black"
							}}
						>
							<User key={item.id} item={item} />
						</div>
					);
				}
			})}
			<Link to="/users">
				<Box>
					<AddButton>Add new friend</AddButton>
				</Box>
			</Link>
		</>
	);
}

const FriendsHeader = styled.h3`
	text-align: center;
	margin-bottom: 10px;
`;

const Box = styled.div`
	margin-top: 15px;
	margin-bottom: 15px;
	border: 1px solid var(--mainBlack);
	border-radius: 50px;
	height: 25px;
	width: 150px;
	margin-left: auto;
	margin-right: auto;
	background-color: var(--mainBlack);
`;

const AddButton = styled.button`
	font-family: "Montserrat";
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
`;
