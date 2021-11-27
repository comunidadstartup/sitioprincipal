import { ObjectType, Field } from "type-graphql";

@ObjectType()
export default class ResponseType {
	@Field({ nullable: false })
	response: string;
}
