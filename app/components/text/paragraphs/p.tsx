import React, { Component } from "react";

type Props = {
	tag?: boolean;
	style?: React.CSSProperties;
	children: React.ReactNode;
	type?: "primary" | "secondary" | "tertiary";
	classes?: string;
};

export default class P extends Component<Props> {
	type(type: Props["type"]) {
		if (type) {
			return type;
		} else {
			return "primary";
		}
	}
	render() {
		const { tag, children, type, classes } = this.props;
		return tag === undefined || tag === true ? (
			<p
				className={["p", this.type(type), classes].join(" ")}
				style={this.props.style}
			>
				{children}
			</p>
		) : (
			<span
				className={["p", this.type(type)].join(" ")}
				style={this.props.style}
			>
				{children}
			</span>
		);
	}
}
