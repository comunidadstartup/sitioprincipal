import anime from "animejs";
import React, { Component } from "react";
import Section from "../../../components/sections/section";
import Text from "../../../components/text/text";
import transitionIn from "../../../functions/animations/transitionIn";
import magicScroll from "../../../functions/magicScroll/magicScroll";
import range from "../../../functions/range/range";
import scrollFix from "../../../functions/scrollFix/scrollFix";

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

export default class Cultura extends Component<Props, State> {
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
			const { height, progress } = this.state;
			transitionIn(`#${this.props.id}-container`, progress, height);
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
				<Text type="H4">Culturización</Text>
				<Text type="P">
					Acompañado de un importante incentivo hacia el{" "}
					<b>cambio de cultura</b> frente al <b>desenvolvimiento</b> de las
					habilidades, a la <b>resolución</b> de problemas y al{" "}
					<b>desarrollo</b>.
				</Text>
			</Section>
		);
	}
}
