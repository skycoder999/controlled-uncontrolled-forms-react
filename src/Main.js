import React from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "./router";
import Navigation from "./components/common/Navigation";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import BasicTable from "./components/BasicTable";
const Main = () => {
	const history = createBrowserHistory();
	return (
		<Router history={history}>
			<Navigation />
			<Switch>
				<Route path="/" exact="true" component={BasicTable} />
				<Route path="/form1" exact="true" component={Form1} />
				<Route path="/form2" exact="true" component={Form2} />
				{Routes.map((route, i) => {
					return (
						<Route
							key={i}
							path={route.path}
							exact={route.exact}
							component={route.component}
						/>
					);
				})}
			</Switch>
		</Router>
	);
};

export default Main;
