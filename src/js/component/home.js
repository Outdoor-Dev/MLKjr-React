import React from "react";

//include images into your bundle

import MLK from "../../img/MLK.png";
import peace from "../../img/peace.png";
import line from "../../img/line.png";

//create your first component
export function Home() {
	return (
		<>
			<div className="mlk">
				<img src={MLK} />
			</div>
			<div className="bubble">
				<img src="https://www.clker.com/cliparts/U/8/k/x/W/9/cartoon-speech-bubble-md.png" />
			</div>

			<img className="peace" src={peace} />
			<img className="line" src={line} />
		</>
	);
}
