import React, { Component } from "react";
import anime from "animejs";

import Section from "../../../components/sections/section";
import Text from "../../../components/text/text";
import Block from "../../../components/block/block";
import scrollFix from "../../../functions/scrollFix/scrollFix";
import magicScroll from "../../../functions/magicScroll/magicScroll";
import range from "../../../functions/range/range";

type Props = {
	id: string;
	nextId: string;
	color: "Light" | "Dark";
};

type State = {
	position: "static" | "relative" | "absolute" | "sticky" | "fixed";
	height: string;
	top?: string;
	progress?: number;
};

export default class Header extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			position: "static",
			height: undefined,
			top: undefined,
			progress: undefined,
		};
		this.setState = this.setState.bind(this);
	}

	componentDidMount() {
		const { id, nextId } = this.props;
		scrollFix(
			this.setState,
			document.getElementById(id),
			document.getElementById(nextId)
		);
		this.animation(id);
	}

	componentDidUpdate(prevProps: Props, prevState: State) {
		if (prevState.progress !== this.state.progress) {
			this.transition();
		}
	}

	transition() {
		const { progress } = this.state;
		let animation = anime({
			targets: `#${this.props.id}-container`,
			translateY: [0, -400],
			easing: "easeInBack",
			autoplay: false,
		});
		let init = 50,
			final = 100;
		if (progress > init) {
			animation.seek(
				magicScroll(range(progress, init, final), 0, 100) * animation.duration
			);
		}
	}

	animation(id: string) {
		anime({
			targets: `#${id}-block`,
			translateY: [400, 0],
			scale: [2, 1],
			opacity: [0, 1],
			easing: "spring(10, 80, 50, 0)",
		});
		anime({
			targets: `#${id}-block-cr`,
			translateY: [400, 0],
			opacity: [0, 1],
			scale: [2, 1],
			delay: 1500,
			easing: "spring(5, 100, 50, 2)",
		});
	}

	render() {
		return (
			<Section
				height={this.state.height}
				style={{
					position: this.state.position,
					top: this.state.top,
				}}
				data={{ block: "" }}
				id={this.props.id}
			>
				<Block id={`${this.props.id}-block`}>
					<Text style="H1" type="Span">
						Comunidad
					</Text>
					<Text style="H1" type="Span">
						Startup
					</Text>
				</Block>
				<Block id={`${this.props.id}-block`}>
					<Text style="H4" type="Span">
						Costa Rica
					</Text>
				</Block>
			</Section>
		);
	}
}
