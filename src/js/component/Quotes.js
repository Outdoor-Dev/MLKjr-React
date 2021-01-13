import React, { useEffect, useState } from "react";

const words = {
	quote1: "The time is always right to do what is right.",
	quote2: "Injustice anywhere is a threat to justice everywhere.",
	quote3:
		"Our lives begin to end the day we become silent about things that matter.",
	quote4:
		"I have decided to stick with love. Hate is too great a burden to bear.",
	quote5: "If I cannot do great things, I can do small things in a great way."
};

export const Quotes = () => {
	const [quote, setQuote] = useState(
		"The time is always right to do what is right."
	);
	useEffect(
		() => {
			setTimeout(() => {
				if (quote === "") {
					setQuote(words.quote1);
				} else if (quote === words.quote1) {
					setQuote(words.quote2);
				} else if (quote === words.quote2) {
					setQuote(words.quote3);
				} else if (quote === words.quote3) {
					setQuote(words.quote4);
				} else if (quote === words.quote4) {
					setQuote(words.quote5);
				} else if (quote === words.quote5) {
					setQuote(words.quote1);
				}
			}, 3000);
		},
		[quote]
	);

	return (
		<>
			<div className="quotes">
				<p>{quote}</p>
			</div>
		</>
	);
};
