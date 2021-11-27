import "reflect-metadata";
import { graphql, GraphQLSchema } from "graphql";
import { Maybe } from "type-graphql";

import { default as createSchema } from "../../../utils/schema";

interface Options {
	source: string;
	variableValues?: Maybe<{
		[key: string]: any;
	}>;
	userId?: number;
}

let schema: GraphQLSchema;

export const graphqlRequest = async ({ source, variableValues }: Options) => {
	if (!schema) {
		schema = createSchema();
	}
	return graphql({
		schema,
		source,
		variableValues,
		contextValue: {
			req: {},
			res: {},
		},
	});
};
