import React from "react";

//include images into your bundle

import line from "../../img/line.png";

//create your first component
export const Line = () => {
	return (
		<>
			<img className="line1" src={line} />
			<img className="line2" src={line} />
			<img className="line3" src={line} />
		</>
	);
};
