import anime from "animejs";
import React, { Component } from "react";
import Block from "../../../../components/block/block";
import Section from "../../../../components/sections/section";
import Text from "../../../../components/text/text";
import transitionIn from "../../../../functions/animations/transitionIn";
import magicScroll from "../../../../functions/magicScroll/magicScroll";
import range from "../../../../functions/range/range";
import relative from "../../../../functions/relative/relative";
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

export default class ConceptoContent extends Component<Props, State> {
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
				<Block classes={"flex_cfs"} id="cpt-cnt-title">
					<Text variant={"secondary"} type="H4">
						Conocimiento por Capital.
					</Text>
					<Text variant={"secondary"} type="H4">
						Experiencia por Tiempo.
					</Text>
				</Block>
				<Text type="P">
					Un <b>método ligero</b> de desarrollo basado más en <b>habilidades</b>{" "}
					y en <b>experiencia</b> que en capital y en tiempo
				</Text>
				<Text type="P">
					permitiendo un <b>ambiente de desarrollo</b> inicial donde el{" "}
					<b>producto</b> pueda ser la <b>prioridad</b> y no a tal grado los
					recursos ni el tiempo.
				</Text>
			</Section>
		);
	}
}
