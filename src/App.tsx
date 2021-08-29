import React from "react";
import "./App.css";
import { AppNavigation } from "./components/Navigation/Navigation";
import { AppFooter } from "./components/Footer/Footer";
import { AppLinks } from "./components/Links/Links";
import Home from "./pages/Home";
import { Divider, Layout, Row, Col } from "antd";

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
