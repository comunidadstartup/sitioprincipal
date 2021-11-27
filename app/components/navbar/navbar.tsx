import React, { Component } from "react";
import anime from "animejs";

import MNVB from "./main/main";
import styles from "./navbar.module.scss";
import relative from "../../functions/relative/relative";

type Props = {
	variant?: "Main";
	type?: "static" | "fixed";
};

type State = {};

export default class NavBar extends Component<Props, State> {
	componentDidMount() {
		this.animation();
		setTimeout(() => {
			this.dynamicBar();
		}, 2000);
	}

	dynamicBar() {
		let lastScroll = window.scrollY,
			count: number = 0,
			percentage = (count * 100) / 20,
			limit = 20;

		let animation = anime({
			targets: "#navbar",
			translateY: [-200, 0],
			easing: "spring(5, 80, 50, 0)",
		});

		window.addEventListener("scroll", () => {
			let { scrollY } = window;

			if (lastScroll > scrollY) {
				count--;
				if (count < 0) count = 0;
			} else {
				count++;
				if (count > limit) count = limit;
			}

			lastScroll = scrollY;
			percentage = (count * 100) / limit;

			let range = percentage > 100 ? 100 : percentage < 0 ? 0 : percentage;

			let value = scrollY <= 0 ? 1 : relative(range, 1, 0);

			animation.seek(value * animation.duration);
		});
	}

	animation() {
		anime({
			targets: "#navbar",
			translateY: [-200, 0],
			opacity: [0, 1],
			delay: 1500,
			easing: "spring(5, 80, 50, 0)",
		});
	}

	variant() {
		switch (this.props.variant) {
			case "Main":
				return <MNVB />;
			default:
				return <MNVB />;
		}
	}

	type() {
		switch (this.props.type) {
			case "static":
				return "static";
			case "fixed":
				return "fixed";
			default:
				return "static";
		}
	}

	render() {
		return (
			<div
				id="navbar"
				className={[styles.navbar, styles[this.type()]].join(" ")}
			>
				{this.variant()}
			</div>
		);
	}
}
