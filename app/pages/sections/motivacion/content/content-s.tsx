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

export default class MotivacionContentII extends Component<Props, State> {
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
				<Text type="P">
					Es un pueblo que en el fondo guarda antiquísimos valores propios de un
					pueblo mediterráneo, al que se le pueden atribuir las máximas{" "}
					<b>“Nada en demasía”</b> de Solón,{" "}
					<b>“El hombre es un animal político”</b> de Aristóteles y{" "}
					<b>“No es el oro sino el hierro con lo que se libera a la patria”</b>{" "}
					de Camilo. Y entender esto es entender como Costa Rica puede triunfar.
				</Text>
			</Section>
		);
	}
}
