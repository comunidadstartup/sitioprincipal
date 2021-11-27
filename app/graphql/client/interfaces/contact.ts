export interface ContactUIData {
	response: "Enviado" | "Error al enviar";
}

export interface ContactUIVars {
	correo: string;
	nombre: string;
	mensaje: string;
	informar: boolean;
}
