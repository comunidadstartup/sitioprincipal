import { buildSchemaSync } from "type-graphql";
import ContactResolver from "../server/resolvers/contact";

export default () =>
	buildSchemaSync({
		resolvers: [ContactResolver],
	});
