import { Field, ArgsType } from "type-graphql";

@ArgsType()
export default class ContactArgs {
	@Field({ nullable: false })
	nombre: string;

	@Field({ nullable: false })
	correo: string;

	@Field()
	mensaje: string;

	@Field({ nullable: false })
	informar: boolean;
}
