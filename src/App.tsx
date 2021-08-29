import React from "react";
import "./App.css";
import { AppNavigation } from "./components/Navigation/Navigation";
import { AppFooter } from "./components/Footer/Footer";
import Home from "./pages/Home";
import { Layout } from "antd";

const { Content } = Layout;

function App() {
	return (
		<Layout className="layout">
			<AppNavigation />
			<Content className="content">
				<Home />
			</Content>
			<AppFooter />
		</Layout>
	);
}

export default App;
