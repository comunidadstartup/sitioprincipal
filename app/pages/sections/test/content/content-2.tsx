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
	scroll?: number;
};

export default class TestContent2 extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			position: "static",
			height: undefined,
			top: undefined,
			progress: undefined,
			scroll: undefined,
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
			translateY: [200, 0],
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
				<Text css={{ textAlign: "left" }} type="P">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Text>
				<Text css={{ textAlign: "right" }} type="P">
					Purus viverra accumsan in nisl nisi scelerisque eu. Mattis molestie a
					iaculis at erat pellentesque adipiscing commodo elit.
				</Text>
				<Text css={{ textAlign: "left" }} type="P">
					Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim.
					Semper feugiat nibh sed pulvinar. Augue eget arcu dictum varius.
					Quisque id diam vel quam elementum pulvinar.
				</Text>
			</Section>
		);
	}
}
