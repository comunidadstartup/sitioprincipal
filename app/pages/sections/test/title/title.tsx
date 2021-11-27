import anime from "animejs";
import React, { Component } from "react";
import Section from "../../../../components/sections/section";
import Text from "../../../../components/text/text";
import magicScroll from "../../../../functions/magicScroll/magicScroll";
import range from "../../../../functions/range/range";
import scrollFix from "../../../../functions/scrollFix/scrollFix";

type Props = {
	id: string;
	nextId: string;
};

type State = {
	position: "static" | "relative" | "absolute" | "sticky" | "fixed";
	height: string;
	top?: string;
	progress?: number;
};

export default class TestTitle extends Component<Props, State> {
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
		scrollFix(
			this.setState,
			document.getElementById(this.props.id),
			document.getElementById(this.props.nextId)
		);
	}

	componentDidUpdate(prevProps: Props, prevState: State) {
		if (prevState.progress !== this.state.progress) {
			this.transition();
		}
	}

	transition() {
		const { progress, height } = this.state;
		let animation = anime({
			targets: `#${this.props.id}-container`,
			translateY: [-200, 0],
			opacity: [0, 1],
			easing: "easeInOutBack",
			autoplay: false,
		});
		let init = 0,
			final = (window.innerHeight * 100) / parseInt(height);
		if (progress > init) {
			animation.seek(
				magicScroll(range(progress, init, final), 0, 100) * animation.duration
			);
		}
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
				<Text type="H2">Sobre Nosotros</Text>
				{/*
				<div
					style={{
						height: "auto",
						width: "100%",
						fontSize: "4rem",
						border: "1px solid red",
					}}
				>
					PRINCIPIO. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
					viverra accumsan in nisl nisi scelerisque eu. Mattis molestie a
					iaculis at erat pellentesque adipiscing commodo elit. Volutpat lacus
					laoreet non curabitur gravida arcu ac tortor dignissim. Semper feugiat
					nibh sed pulvinar. Augue eget arcu dictum varius. Quisque id diam vel
					quam elementum pulvinar. Senectus et netus et malesuada fames ac. Et
					egestas quis ipsum suspendisse. Viverra adipiscing at in tellus
					integer feugiat. Libero enim sed faucibus turpis in eu. Orci phasellus
					egestas tellus rutrum. At lectus urna duis convallis convallis tellus
					id interdum. Cras sed felis eget velit aliquet sagittis id
					consectetur. Quis enim lobortis scelerisque fermentum dui faucibus.
					Vitae congue eu consequat ac felis donec. Tristique senectus et netus
					et. Phasellus faucibus scelerisque eleifend donec. Gravida rutrum
					quisque non tellus orci ac auctor. FIN.
				</div>
					*/}
			</Section>
		);
	}
}
