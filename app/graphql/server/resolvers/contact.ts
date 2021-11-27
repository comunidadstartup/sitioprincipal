import { Resolver, Query, Args } from "type-graphql";
import ContactArgs from "../arguments/contact";
import nodemailer from "nodemailer";

import ContactType from "../types/contact";
import ResponseType from "../types/response";

@Resolver(ContactType)
export default class ContactResolver {
	@Query(() => ResponseType)
	async sendEmail(@Args() { nombre, correo, mensaje, informar }: ContactArgs) {
		// ----------------- CREAR CORREO DEDICADO PARA ENVÍOS -----------------
		let { CONTACT_EMAIL, CONTACT_PASS } = process.env;

		let transporter = nodemailer.createTransport({
			host: "smtp.ethereal.email",
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: CONTACT_EMAIL,
				pass: CONTACT_PASS,
			},
		});

		try {
			await transporter.verify();
			try {
				await transporter.sendMail({
					from: `"${nombre.split(" ")[0]}" ${correo}`,
					to: CONTACT_EMAIL,
					subject: `Contacto de ${nombre}`,
					text: `Correo: ${correo}\nMensaje: ${mensaje}\nInformar: ${informar}`,
				});
				return {
					response: "Enviado",
				};
			} catch {
				return { response: "Error de servidor [514]" };
			}
		} catch {
			return { response: "Error de servidor [513]" };
		}
	}
}
