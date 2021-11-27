import React, { Component } from "react";
import styles from "./content.module.scss";
import EquipoView from "./view/view";

type Props = {
	id: string;
	nextId: string;
};

type State = {};

export default class EquipoContent extends Component<Props, State> {
	render() {
		return (
			<div id={this.props.id} className={styles.content}>
				<EquipoView
					id="andy"
					nextId={this.props.nextId}
					name="Andres Tamayo"
					role="Fundador"
					description="Desarrollador dedicado tiempo completo al emprendedurismo bajo proyectos propios en sectores como la movilidad urbana, el comercio electrónico, redes, salud y productividad."
				/>
			</div>
		);
	}
}
