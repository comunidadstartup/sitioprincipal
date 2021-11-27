import React, { Component } from "react";
import styles from "./block.module.scss";

type Props = {
	id: string;
	data?: { block?: string; step?: string; flex?: string };
	style?: React.CSSProperties;
	classes?: string;
};

type State = {};

export default class Block extends Component<Props, State> {
	render() {
		const { data } = this.props;
		return (
			<div
				id={this.props.id}
				style={this.props.style}
				data-block={data ? data.block : undefined}
				data-step={data ? data.step : undefined}
				data-flex={data ? data.flex : undefined}
				className={[this.props.classes, styles.block].join(" ")}
			>
				{this.props.children}
			</div>
		);
	}
}
