import anime from "animejs";
import React, { Component } from "react";
import Section from "../../../../components/sections/section";
import Text from "../../../../components/text/text";
import transitionIn from "../../../../functions/animations/transitionIn";
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

export default class CreciendoContent extends Component<Props, State> {
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
				<Text type="P">
					<b>El equipo</b> está creciendo y buscando tanto{" "}
					<b>miembros pasivos</b> que deseen y puedan disponer de su atención a
					las inquietudes o necesidades técnicas y profesionales de la{" "}
					<b>comunidad</b>, como <b>miembros activos</b> que puedan dedicar al
					menos una o dos horas al día de su tiempo para contribuir al
					desarrollo de la <b>organización</b>
				</Text>
			</Section>
		);
	}
}
