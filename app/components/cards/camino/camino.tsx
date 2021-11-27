import React, { Component } from "react";
import range from "../../../functions/range/range";
import relative from "../../../functions/relative/relative";
import typer from "../../../functions/typer/typer";
import styles from "./camino.module.scss";

type Props = {
	date: string;
	text: string;
	progress: number;
};

type State = {
	text?: string;
};

export default class CaminoCard extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			text: undefined,
		};
		this.setState = this.setState.bind(this);
	}

	componentDidUpdate(prevProps: Props, prevState: State) {
		if (prevProps.progress !== this.props.progress) {
			typer(this.props.text, this.props.progress, this.setState);
		}
	}

	render() {
		const { progress } = this.props;
		return (
			<div className={styles.card}>
				<div className={styles.decor}>
					<div
						style={{
							transform: `translate(-${relative(progress, 50, 0)}%, -${relative(
								progress,
								50,
								0
							)}%)`,
							top: "-" + relative(progress, 5, 0) + "rem",
							left: relative(progress, 50, 0) + "%",
							width: relative(progress, 10, 2) + "rem",
							height: relative(progress, 10, 2) + "rem",
						}}
						className={styles.pin}
					></div>
				</div>
				<div
					style={{
                        paddingTop: relative(progress, 2, 0) + "rem",
						paddingLeft: relative(progress, 0, 4) + "rem",
					}}
					className={styles.details}
				>
					<div
						style={{
							color: `rgb(255, ${relative(progress, 126, 255)}, ${relative(
								progress,
								121,
								255
							)})`,
							transform: `translate(-${relative(progress, 50, 0)}%, -${relative(
								progress,
								50,
								0
							)}%)`,
							top: "-" + relative(progress, 5, 0) + "rem",
							left: relative(progress, 50, 0) + "%",
							paddingLeft: relative(progress, 0, 4) + "rem",
						}}
						className={[styles.date].join(" ")}
					>
						{this.props.date}
					</div>
					<span
						style={{
							paddingTop: relative(progress, 0, 2) + "rem",
						}}
						className={["p", "primary", styles.info].join(" ")}
					>
						{this.state.text}
					</span>
				</div>
			</div>
		);
	}
}
