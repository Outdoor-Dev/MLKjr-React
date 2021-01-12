import React from "react";

//include images into your bundle

import peace from "../../img/peace.png";

//create your first component
export const Peace = () => {
	return (
		<>
			<img className="peace1" src={peace} />
			<img className="peace2" src={peace} />
			<img className="peace3" src={peace} />
		</>
	);
};
