import React, { Component } from "react";
import Section from "../../../../components/sections/section";
import Text from "../../../../components/text/text";
import transitionIn from "../../../../functions/animations/transitionIn";
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

export default class Academia extends Component<Props, State> {
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
				<Text type="H4">
					Programa de Voluntariados Bajo Modalidad Académica
				</Text>
				<Text type="P">
					Permitiendo la <b>construcción</b> de talento y el <b>crecimiento</b>{" "}
					de experiencia mediante una dinámica <b>mutualista</b> de enseñanza y
					aporte entre el cursante y la compañía afiliada. Introduciendo así la{" "}
					<b>cultura de fuente abierta</b> (open source) y sus <b>beneficios</b>{" "}
					tanto para el contribuidor como para el propietario.
				</Text>
			</Section>
		);
	}
}
