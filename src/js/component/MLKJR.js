import React from "react";
import MLK from "../../img/MLK.png";

export const MLKJR = () => {
	return (
		<>
			{" "}
			<video
				className="video"
				autoPlay
				loop
				type="video/mp4"
				src="https://v.ftcdn.net/02/18/55/89/700_F_218558977_UainYTjWpK1gpRZWqLLKC5pzOYQkmNP7_ST.mp4">
				Your browser does not support the video tag{" "}
			</video>
			<div className="mlk">
				<img src={MLK} />
			</div>
			<img
				className="bubble"
				src="https://www.clker.com/cliparts/U/8/k/x/W/9/cartoon-speech-bubble-md.png"
			/>
		</>
	);
};
