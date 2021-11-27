import { gql } from "@apollo/client";

export default gql`
	query SendEmail(
		$nombre: string!
		$correo: string!
		$mensaje: string
		$informar: boolean!
	) {
		sendEmail(
			nombre: $nombre
			correo: $correo
			mensaje: $mensaje
			informar: $informar
		) {
			response
		}
	}
`;
