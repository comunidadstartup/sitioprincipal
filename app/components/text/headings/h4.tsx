import React, { Component } from "react";

type Props = {
	tag?: boolean;
	children: React.ReactNode;
	style?: React.CSSProperties;
	type?: "primary" | "secondary" | "tertiary";
	classes?: string;
};

export default class H4 extends Component<Props> {
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
			<h4
				className={[this.type(type), classes].join(" ")}
				style={this.props.style}
			>
				{this.props.children}
			</h4>
		) : (
			<span
				style={this.props.style}
				className={["h4", this.type(type)].join(" ")}
			>
				{children}
			</span>
		);
	}
}
