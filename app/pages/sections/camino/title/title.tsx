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

export default class CaminoTitle extends Component<Props, State> {
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
				id={this.props.id}
				data={{ block: "" }}
				background="secondary"
			>
				<Text variant="tertiary" type="H3">
					Camino
				</Text>
				<Text variant="tertiary" type="H2">
					Introspectiva
				</Text>
			</Section>
		);
	}
}
