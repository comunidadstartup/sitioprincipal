import React from "react";

export default function typer(
	text: string,
	progress: number,
	setState: React.Dispatch<React.SetStateAction<{ text: string }>>
) {
	// check progress from 0 to 100
	// check text length
	// turn text length to percentage
	// turn percentage to rounded numbers
	// print as many characters as the rounded numbers based on the progress

	// on scroll - on state change
	// if progress is 10
	// progress * 100 / textLength (100)
	// print (10) characters

	let perToInt = (progress * text.length) / 100;
	let res: string = "",
		count = 0;
	do {
		res += text.charAt(count);
		count++;
	} while (count < perToInt);
	setState({
		text: res.length > 1 ? res : "",
	});
}
