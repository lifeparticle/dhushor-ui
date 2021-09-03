import React from "react";
import "./App.css";
import { AppNavigation } from "./components/Navigation/Navigation";
import { AppFooter } from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { Layout } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";
import { ROUTING_URLS } from "./constants/constants";

const { Content } = Layout;

function App() {
	return (
		<Layout>
			<AppNavigation />
			<Content>
				<Switch>
					<Route exact path="/">
						<Redirect to={ROUTING_URLS.home} />
					</Route>
					<Route path={ROUTING_URLS.home} component={Home} />
					<Route path={ROUTING_URLS.about} component={About} />
					<Route path={ROUTING_URLS.all} component={NotFound} />
				</Switch>
			</Content>
			<AppFooter />
		</Layout>
	);
}

export default App;
