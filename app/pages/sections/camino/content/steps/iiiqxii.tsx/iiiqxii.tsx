import anime from "animejs";
import React, { Component } from "react";
import Block from "../../../../../../components/block/block";
import CaminoCard from "../../../../../../components/cards/camino/camino";
import Section from "../../../../../../components/sections/section";
import magicScroll from "../../../../../../functions/magicScroll/magicScroll";
import range from "../../../../../../functions/range/range";
import scrollFix from "../../../../../../functions/scrollFix/scrollFix";

type Props = {
	id: string;
	nextId: string;
	data?: { block?: string; step?: string };
};
type State = {
	position: "static" | "relative" | "absolute" | "sticky" | "fixed";
	height: string;
	top?: string;
	progress?: number;
};

export default class Step3QXII extends Component<Props, State> {
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
			this.transitionIn;
		}
	}

	transitionIn() {
		const { progress, height } = this.state;
		let animation = anime({
			targets: `#${this.props.id}-container`,
			translateY: [200, 0],
			easing: "easeInOutBack",
			autoplay: false,
		});
		let init = 0,
			final = ((window.innerHeight / 2) * 100) / parseInt(height);
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
				style={{ position: this.state.position, top: this.state.top }}
				background="secondary"
				data={{ step: "" }}
				id={this.props.id}
			>
				<CaminoCard
					progress={this.state.progress}
					date="Q3, 2022"
					text="Expandir programa de voluntariados bajo
					modalidad de curso a emergentes y
					compañías afiliadas a la comunidad"
				/>
			</Section>
		);
	}
}
