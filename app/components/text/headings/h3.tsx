import React, { Component } from "react";

type Props = {
	tag?: boolean;
	type?: "primary" | "secondary" | "tertiary";
	style?: React.CSSProperties;
	children: React.ReactNode;
	classes?: string;
};

export default class H3 extends Component<Props> {
	type(type: Props["type"]) {
		if (type) {
			return type;
		} else {
			return "primary";
		}
	}
	render() {
		const { tag, type, children, classes } = this.props;
		return tag === undefined || tag === true ? (
			<h3
				style={this.props.style}
				className={[this.type(type), classes].join(" ")}
			>
				{this.props.children}
			</h3>
		) : (
			<span
				style={this.props.style}
				className={["h3", this.type(type)].join(" ")}
			>
				{children}
			</span>
		);
	}
}
