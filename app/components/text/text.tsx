import React, {
	Component,
	JSXElementConstructor,
	ReactElement,
	ReactNode,
} from "react";
import ReactMarkdown from "react-markdown";

import H1 from "./headings/h1";
import H2 from "./headings/h2";
import H3 from "./headings/h3";
import H4 from "./headings/h4";
import H5 from "./headings/h5";
import H6 from "./headings/h6";
import P from "./paragraphs/p";
import Span from "./paragraphs/span";

type Types = "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "P";

type Props = {
	type: Types | "Span";
	children: React.ReactNode;
	style?: Types;
	css?: React.CSSProperties;
	variant?: "primary" | "secondary" | "tertiary";
	classes?: string;
};

type State = {};

export default class Text extends Component<Props, State> {
	type() {
		const { type, children, style, variant } = this.props;
		switch (type) {
			case "H1":
				return (
					<H1
						classes={this.props.classes}
						style={this.props.css}
						type={variant}
					>
						{children}
					</H1>
				);
			case "H2":
				return (
					<H2
						classes={this.props.classes}
						style={this.props.css}
						type={variant}
					>
						{children}
					</H2>
				);
			case "H3":
				return (
					<H3
						classes={this.props.classes}
						type={variant}
						style={this.props.css}
					>
						{children}
					</H3>
				);
			case "H4":
				return (
					<H4
						classes={this.props.classes}
						type={variant}
						style={this.props.css}
					>
						{children}
					</H4>
				);
			case "H5":
				return (
					<H5
						classes={this.props.classes}
						type={variant}
						style={this.props.css}
					>
						{children}
					</H5>
				);
			case "H6":
				return (
					<H6
						classes={this.props.classes}
						type={variant}
						style={this.props.css}
					>
						{children}
					</H6>
				);
			case "P":
				return (
					<P classes={this.props.classes} type={variant} style={this.props.css}>
						{children}
					</P>
				);
			case "Span":
				if (style) {
					return (
						<Span
							classes={this.props.classes}
							css={this.props.css}
							style={style}
						>
							{children}
						</Span>
					);
				} else {
					return (
						<span
							style={{
								padding: "10px 10px",
								border: "1px solid #ff4d41",
								borderRadius: "5px",
								marginBottom: "10px",
								color: "#ff4d41",
							}}
						>
							Text Component Error: No Style Provided
						</span>
					);
				}
		}
	}

	render() {
		return this.type();
	}
}
