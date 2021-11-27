import { ObjectType, Field } from "type-graphql";

@ObjectType()
export default class ContactType {
	@Field({ nullable: false })
	nombre: string;
	@Field({ nullable: false })
	correo: string;
	@Field()
	mensaje: string;
	@Field({ nullable: false })
	informar: boolean;
}
