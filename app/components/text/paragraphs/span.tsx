import React, { Component } from "react";
import H1 from "../headings/h1";
import H2 from "../headings/h2";
import H3 from "../headings/h3";
import H4 from "../headings/h4";
import H5 from "../headings/h5";
import H6 from "../headings/h6";
import P from "./p";

type Props = {
	style: "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "P";
	type?: "primary" | "secondary";
	css?: React.CSSProperties;
	children: React.ReactNode;
	classes?: string;
};

export default class Span extends Component<Props> {
	style() {
		const { children, style, type } = this.props;
		switch (style) {
			case "H1":
				return (
					<H1
						classes={this.props.classes}
						style={this.props.css}
						type={type}
						tag={false}
					>
						{children}
					</H1>
				);
			case "H2":
				return (
					<H2
						classes={this.props.classes}
						style={this.props.css}
						type={type}
						tag={false}
					>
						{children}
					</H2>
				);
			case "H3":
				return (
					<H3
						classes={this.props.classes}
						type={type}
						style={this.props.css}
						tag={false}
					>
						{children}
					</H3>
				);
			case "H4":
				return (
					<H4
						classes={this.props.classes}
						type={type}
						style={this.props.css}
						tag={false}
					>
						{children}
					</H4>
				);
			case "H5":
				return (
					<H5
						classes={this.props.classes}
						type={type}
						style={this.props.css}
						tag={false}
					>
						{children}
					</H5>
				);
			case "H6":
				return (
					<H6
						classes={this.props.classes}
						type={type}
						style={this.props.css}
						tag={false}
					>
						{children}
					</H6>
				);
			case "P":
				return (
					<P classes={this.props.classes} style={this.props.css} tag={false}>
						{children}
					</P>
				);
		}
	}
	render() {
		return this.style();
	}
}
