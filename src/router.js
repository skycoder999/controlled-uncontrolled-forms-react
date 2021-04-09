import BasicTable from "./components/BasicTable";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import { BASE_ROUTE_NAME } from "./config.js";

/* Paths */
export const BASIC_TABLE = "basictable";
export const FORM_1 = "form1";
export const FORM_2 = "form2";

/* Params */
export const REF_NO = "refNo";
export const CITY_CODE = "bookingCity";
export const PAGE = "page";
export const SUB_PAGE = "subPage";
export const BASE_PATH = BASE_ROUTE_NAME;

/* Add routes here */

/* Main Routes */
export const Routes = [
	{
		component: BasicTable,
		exact: true,
		path: `${BASE_PATH}`,
	},
	{
		component: Form1,
		exact: true,
		path: `${BASE_PATH}/${FORM_1}`,
	},
	{
		component: Form2,
		exact: true,
		path: `${BASE_PATH}/${FORM_2}`,
	},
];
