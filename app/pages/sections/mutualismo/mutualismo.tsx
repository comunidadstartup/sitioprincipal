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

export default class Mutualismo extends Component<Props, State> {
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
			const { progress, height } = this.state;
			transitionIn(`${this.props.id}-container`, progress, height);
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
				<Text type="H4">Mutualismo</Text>
				<Text type="P">
					Llevado acabo mediante dinámicas comunitarias de{" "}
					<b>retroalimentación</b>, de experiencia y de aprendizaje con bases en
					el <b>mutualismo</b>. No es solo cuestión de construir a los demás,
					sino de <b>construirte a tí mismo</b>.
				</Text>
				<Text type="P">
					"<i>Ayudando a los demás, te ayudas a tí mismo"</i>
				</Text>
			</Section>
		);
	}
}
