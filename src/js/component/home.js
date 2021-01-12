import React from "react";
import { Peace } from "./Peace.js";
import { Line } from "./Line.js";

//include images into your bundle

import MLK from "../../img/MLK.png";
import peace from "../../img/peace.png";
import line from "../../img/line.png";

//create your first component
export function Home() {
	return (
		<>
			<div className="peace1">
				<Peace />
				<Peace />
			</div>
			<div className="peace2">
				<Peace />
				<Peace />
			</div>
			<div className="peace3">
				<Peace />
				<Peace />
			</div>

			<div className="line1">
				<Line />
				<Line />
			</div>
			<div className="line2">
				<Line />
				<Line />
			</div>
			<div className="line3">
				<Line />
				<Line />
			</div>
			<div className="mlk">
				<img src={MLK} />
			</div>
			<div className="bubble">
				<img src="https://www.clker.com/cliparts/U/8/k/x/W/9/cartoon-speech-bubble-md.png" />
			</div>
		</>
	);
}
