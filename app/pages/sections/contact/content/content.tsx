import React, { Component } from "react";

import autosize from "autosize";

import styles from "./content.module.scss";

import Section from "../../../../components/sections/section";
import scrollFix from "../../../../functions/scrollFix/scrollFix";
import transitionIn from "../../../../functions/animations/transitionIn";
import ContactForm from "./components/form/form";

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

export default class ContactoContent extends Component<Props, State> {
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
		autosize(document.querySelector("textarea"));
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
					flexDirection: "row",
					flexWrap: "wrap",
					gap: "1rem",
					width: "100%",
				}}
				id={this.props.id}
				data={{ flex: "" }}
				background="secondary"
			>
				<div className={[styles.box, styles.left].join(" ")}>
					<Item title="Facebook" text="/comunidadstartups" />
					<Item title="Github" text="/comunidadstartup" />
				</div>
				<div className={[styles.box, styles.right].join(" ")}>
					<ContactForm />
				</div>
			</Section>
		);
	}
}

type itemProps = {
	title: string;
	text: string;
};

type itemState = {};

class Item extends Component<itemProps, itemState> {
	render() {
		return (
			<div className={styles.item}>
				<span>{this.props.title}</span>
				<span>{this.props.text}</span>
			</div>
		);
	}
}
