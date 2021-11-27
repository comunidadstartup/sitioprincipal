import React, { Component } from "react";

import EquipoCard from "../../../../../components/cards/equipo/equipo";
import Section from "../../../../../components/sections/section";

import transitionIn from "../../../../../functions/animations/transitionIn";
import scrollFix from "../../../../../functions/scrollFix/scrollFix";

type Props = {
	id: string;
	nextId: string;
	name: string;
	role: string;
	description: string;
};

type State = {
	position: "static" | "relative" | "absolute" | "sticky" | "fixed";
	height: string;
	top?: string;
	progress?: number;
};

export default class EquipoView extends Component<Props, State> {
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
				<EquipoCard
					name={this.props.name}
					role={this.props.role}
					description={this.props.description}
				/>
			</Section>
		);
	}
}
