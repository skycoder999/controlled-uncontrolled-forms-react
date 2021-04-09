export const API_ENDPOINT = process.env.API_ENDPOINT;
export const ENVIRONMENT = process.env.ENVIRONMENT;
//export const BASE_ROUTE_NAME = process.env.BASE_ROUTE_NAME;
export const BASE_ROUTE_NAME = "http://localhost:3000";

export const ENVIRONMENT_TYPE = {
	DEVELOPMENT: "development",
	PRODUCTION: "production",
};

const config = {
	apiEndpoint: process.env.API_ENDPOINT,
	tableParams: {
		tablePageSize: 20,
		tableDefaultPageNo: 0,
	},
	categories: [{ value: "COAT", text: "Lorem Ipsum Dorem" }],
};

export default config;

export const { apiEndpoint, tableParams, categories } = config;
