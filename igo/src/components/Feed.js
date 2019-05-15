import React, { useContext } from "react";
import { AppContext } from "../context";
import Activity from "./Activity";

export default function Feed(props) {
	const value = useContext(AppContext);

	return (
		<>
			{value.state.feedData.map(item => {
				if (item.display) {
					return (
						<Activity
							key={item.id}
							item={item}
							setBack={props.setBack}
						/>
					);
				}
			})}
		</>
	);
}
