import React from "react";
import { Quotes } from "./Quotes.js";

//include images into your bundle

import MLK from "../../img/MLK.png";
import peace from "../../img/peace.png";
import line from "../../img/line.png";

//create your first component
export function Home() {
	return (
		<>
			<img className="peace1" src={peace} />
			<img className="line1" src={line} />

			<div className="mlk">
				<img src={MLK} />
			</div>

			<img
				className="bubble"
				src="https://www.clker.com/cliparts/U/8/k/x/W/9/cartoon-speech-bubble-md.png"
			/>
			<Quotes />
		</>
	);
}
