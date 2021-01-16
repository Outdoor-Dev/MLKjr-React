import React, { useEffect, useState } from "react";

const words = {
	quote1: [
		"The time is",
		<br />,
		"always right",
		<br />,
		"to do what is right."
	],
	quote2: [
		"Injustice anywhere",
		<br />,
		"is a threat to ",
		<br />,
		"justice everywhere."
	],
	quote3: [
		"Lives begin to end the day ",
		<br />,
		"we become silent ",
		<br />,
		"about things that matter."
	],
	quote4: [
		"I have decided to ",
		<br />,
		"stick with love. Hate is too",
		<br />,
		"great a burden to bear."
	],
	quote5: [
		"If I cannot do great",
		<br />,
		" things, I can do small things ",
		<br />,
		"in a great way."
	]
};

export const Quotes = () => {
	const [quote, setQuote] = useState(words.quote1);
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
			}, 4000);
		},
		[quote]
	);

	return (
		<>
			<div className="quotes">
				<p className="quote-paragraph">{quote}</p>
			</div>
		</>
	);
};
