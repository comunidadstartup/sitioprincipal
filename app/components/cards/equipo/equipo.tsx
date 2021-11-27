import React, { Component } from "react";
import styles from "./equipo.module.scss";

type Props = {
	name: string;
	role: string;
	description: string;
};

type State = {};

export default class EquipoCard extends Component<Props, State> {
	render() {
		return (
			<div className={styles.card}>
				<h3 className="secondary">{this.props.name}</h3>
				<h4 className="tertiary">{this.props.role}</h4>
				<p className="primary">{this.props.description}</p>
			</div>
		);
	}
}
