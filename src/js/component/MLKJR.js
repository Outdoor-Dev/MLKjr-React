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
				src="https://v.ftcdn.net/03/88/40/10/700_F_388401044_mXzGhaniJub0yQUU1stRZIwXUub5MTbz_ST.mp4">
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
