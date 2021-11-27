import React, { Component } from "react";
import styles from "../../content.module.scss";

import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
} from "@apollo/client";
import { Formik } from "formik";
import * as Yup from "yup";

// QUERIES
import sendEmail from "../../../../../../graphql/client/queries/sendEmail";

// INTERFACES

import {
	ContactUIVars,
	ContactUIData,
} from "../../../../../../graphql/client/interfaces/contact";
import Span from "../../../../../../components/text/paragraphs/span";

type Props = {};
type State = {
	loading?: boolean;
	mail?: { response: "Enviado" | "Error al enviar" };
};

export default class ContactForm extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			loading: false,
			mail: undefined,
		};
	}

	validation = Yup.object().shape({
		correo: Yup.string().email("Correo invalido").required("Correo requerido"),
		nombre: Yup.string()
			.min(2, "Al menos 2 caracteres requeridos")
			.max(50, "Hasta 50 caracteres permitidos")
			.required("Nombre requerido"),
		mensaje: Yup.string().max(240, "Hasta 240 caracteres permitidos"),
		informar: Yup.boolean(),
	});

	async submit({ nombre, correo, mensaje, informar }: ContactUIVars) {
		const { loading, data } = useQuery<ContactUIData, ContactUIVars>(
			sendEmail,
			{
				variables: { correo, nombre, informar, mensaje },
			}
		);
		if (loading) {
			this.setState({ loading: true, mail: undefined });
		} else {
			this.setState({ loading: false, mail: data });
			setTimeout(() => {
				this.setState({ loading: false, mail: undefined });
			}, 10000);
		}
	}
	render() {
		return this.state.loading ? (
			<Span style="H6">Loading</Span>
		) : this.state.mail === undefined ? (
			<Formik
				initialValues={{
					correo: "",
					nombre: "",
					mensaje: "",
					informar: false,
				}}
				validationSchema={this.validation}
				onSubmit={(values) => {
					this.submit(values);
				}}
			>
				{(props) => (
					<form onSubmit={props.handleSubmit}>
						<label className={styles.label} htmlFor="correo">
							Correo Electrónico
						</label>
						<input
							className={styles.input}
							id="correo"
							name="correo"
							type="text"
							placeholder="Escribir Correo"
							onChange={props.handleChange}
						/>

						<label className={styles.label} htmlFor="nombre">
							Nombre Completo
						</label>
						<input
							className={styles.input}
							id="nombre"
							name="nombre"
							type="text"
							placeholder="Escribir Nombre"
							onChange={props.handleChange}
						/>

						<label className={styles.label} htmlFor="mensaje">
							Mensaje
						</label>
						<textarea
							className={styles.input}
							id="mensaje"
							name="mensaje"
							placeholder="Escribir Mensaje"
							onChange={props.handleChange}
						/>
						<div className={styles.información}>
							<input
								id="informar"
								name="informar"
								className={styles.input}
								type="checkbox"
							/>
							<label className={styles.detalle}>
								Manténme informado sobre el desarrollo de esta comunidad a
								futuro
							</label>
						</div>

						<button type="submit">Submit</button>
					</form>
				)}
			</Formik>
		) : (
			<Span style="H6">{this.state.mail.response}</Span>
		);
	}
}
