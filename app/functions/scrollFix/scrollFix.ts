import React from "react";
import magicScroll from "../magicScroll/magicScroll";
import range from "../range/range";
import relative from "../relative/relative";

export default function scrollFix(
	setState: React.Dispatch<
		React.SetStateAction<{
			position: "static" | "relative" | "absolute" | "sticky" | "fixed";
			height: string;
			top?: string;
			progress?: number;
			scroll?: number;
		}>
	>,
	first: HTMLElement,
	last: HTMLElement
) {
	function isHeight(good: string | number, bad: string | number) {
		return first.children[0].clientHeight > window.innerHeight ? good : bad;
	}
	window.addEventListener("scroll", () => {
		let view = window.scrollY + window.innerHeight;
		if (view > last.offsetTop) {
			setState({
				position: "absolute",
				height: first.clientHeight + "px",
				top: first.clientHeight - first.children[0].clientHeight + "px", //isHeight(0, last.offsetTop - window.innerHeight) + "px",
				progress: 100,
			});
		} else if (window.scrollY < first.offsetTop) {
			setState({
				position: "static",
				height: first.clientHeight + "px",
				top: undefined,
				progress: 0,
			});
		} else if (view < last.offsetTop) {
			let init = first.offsetTop + window.innerHeight;
			let percent: number;
			if (view >= init && view <= last.offsetTop) {
				percent = ((view - init) / (last.offsetTop - init)) * 100;
			}
			let adjust = first.children[0].clientHeight - window.innerHeight;
			let scroll =
				relative(
					magicScroll(
						range(
							percent,
							(window.innerHeight * 100) / first.clientHeight,
							100
						),
						0,
						100
					),
					0,
					-adjust
				) * 100;
			setState({
				position: "fixed",
				height: first.clientHeight + "px",
				top: isHeight(scroll, 0) + "px",
				progress: percent,
			});
		}
	});
}
