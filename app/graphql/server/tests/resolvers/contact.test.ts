import "reflect-metadata";
import faker from "faker";
import ContactType from "../../types/contact";
import { ApolloServer } from "apollo-server-micro";
import { default as createSchema } from "../../../utils/schema";
import { GraphQLSchema } from "graphql";

const nodemailer = require("nodemailer");

const REAL_EMAIL = process.env.CONTACT_EMAIL;
const REAL_PASS = process.env.CONTACT_PASS;

let schema: GraphQLSchema;
let server: ApolloServer;

jest.mock("nodemailer");

beforeEach(() => {
	jest.resetAllMocks();
	schema = createSchema();

	server = new ApolloServer({
		schema,
	});
});

afterEach(() => {
	server = undefined;
	schema = undefined;
});

test("Verification Failed", async () => {
	nodemailer.createTransport = jest.fn().mockReturnValue({
		verify: jest.fn().mockImplementation(() => Promise.reject()),
	});

	// process.env.CONTACT_EMAIL = undefined;
	// process.env.CONTACT_PASS = undefined;

	const vars: ContactType = {
		nombre: faker.name.findName(),
		correo: faker.internet.email(),
		mensaje: faker.lorem.sentence(140),
		informar: faker.datatype.boolean(),
	};
	const contact = `
		query SendEmail(
			$nombre: String!
			$correo: String!
			$mensaje: String!
			$informar: Boolean!
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

	const res = await server.executeOperation({
		query: contact,
		variables: vars,
	});

	expect(res.data["sendEmail"]).toMatchObject({
		response: "Error de servidor [513]",
	});
});

test("Email Error", async () => {
	nodemailer.createTransport = jest.fn().mockReturnValue({
		verify: jest.fn().mockImplementation(() => Promise.resolve(true)),
		sendMail: jest.fn().mockImplementation(() => Promise.reject(new Error())),
	});

	process.env.CONTACT_EMAIL = REAL_EMAIL;
	process.env.CONTACT_PASS = REAL_PASS;
	const schema = createSchema();

	const server = new ApolloServer({
		schema,
	});

	const vars: ContactType = {
		nombre: faker.name.findName(),
		correo: faker.internet.email(),
		mensaje: faker.lorem.sentence(140),
		informar: faker.datatype.boolean(),
	};
	const contact = `
		query SendEmail(
			$nombre: String!
			$correo: String!
			$mensaje: String!
			$informar: Boolean!
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

	const res = await server.executeOperation({
		query: contact,
		variables: vars,
	});

	expect(res.data["sendEmail"]).toMatchObject({
		response: "Error de servidor [514]",
	});
});

test("Success", async () => {
	nodemailer.createTransport = jest.fn().mockReturnValue({
		verify: jest.fn().mockImplementation(() => Promise.resolve(true)),
		sendMail: jest
			.fn()
			.mockImplementation(() =>
				Promise.resolve({ data: { sendMail: { response: "Enviado" } } })
			),
	});
	process.env.CONTACT_EMAIL = REAL_EMAIL;
	process.env.CONTACT_PASS = REAL_PASS;
	const schema = createSchema();

	const server = new ApolloServer({
		schema,
	});

	const vars: ContactType = {
		nombre: faker.name.findName(),
		correo: faker.internet.email(),
		mensaje: faker.lorem.sentence(140),
		informar: faker.datatype.boolean(),
	};
	const contact = `
		query SendEmail(
			$nombre: String!
			$correo: String!
			$mensaje: String!
			$informar: Boolean!
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

	const res = await server.executeOperation({
		query: contact,
		variables: vars,
	});

	expect(res.data["sendEmail"]).toMatchObject({
		response: "Enviado",
	});
});
