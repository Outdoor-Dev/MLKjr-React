import React from "react";
import { Quotes } from "./Quotes.js";
import { MLKJR } from "./MLKJR.js";

//include images into your bundle

//create your first component
export function Home() {
	return (
		<>
			<MLKJR />
			<Quotes />
		</>
	);
}
