import React, { Component } from "react";
import Block from "../block/block";
import styles from "./section.module.scss";

type Props = {
	id: string;
	background?: "primary" | "secondary";
	type?: "padded" | "heighted";
	data?: { block?: string; step?: string; flex?: string };
	style?: React.CSSProperties;
	height: string;
};

type State = {};

export default class Section extends Component<Props, State> {
	background() {
		switch (this.props.background) {
			case "primary":
				return "primary";
			case "secondary":
				return "secondary";
			default:
				return "primary";
		}
	}

	render() {
		return (
			<div
				style={{ height: this.props.height }}
				id={this.props.id}
				className={[styles.section, styles[this.background()]].join(" ")}
			>
				<Block
					style={this.props.style}
					data={this.props.data}
					id={`${this.props.id}-container`}
				>
					{this.props.children}
				</Block>
			</div>
		);
	}
}
