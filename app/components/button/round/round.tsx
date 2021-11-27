import React, { Component, ReactNode } from "react";
import styles from "./round.module.scss";

type Props = {
	type?: "primary" | "secondary";
};

type State = {};

export default class Round extends Component<Props, State> {
	type() {
		if (this.props.type) {
			return this.props.type;
		} else {
			return "primary";
		}
	}
	render() {
		return (
			<button className={[styles.button, this.type()].join(" ")}>
				{this.props.children}
			</button>
		);
	}
}
