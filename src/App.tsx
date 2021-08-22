import React from "react";
import "./App.css";
import { AppNavigation } from "./components/Navigation/Navigation";
import { AppFooter } from "./components/Footer/Footer";
import { AppLinks } from "./components/Links/Links";
import { Divider, Layout, Row, Col } from "antd";

const { Content } = Layout;

function App() {
	return (
		<Layout className="layout">
			<AppNavigation />
			<Content>
				<Row>
					<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
						Col
					</Col>
					<Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
						Col
					</Col>
					<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
						Col
					</Col>
				</Row>
				<Divider orientation="left" plain>
					Image
				</Divider>
				<Row>
					<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
						Col
					</Col>
					<Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
						Col
					</Col>
					<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
						Col
					</Col>
				</Row>
				<Divider orientation="left" plain>
					Helpful Links
				</Divider>
				<Row>
					<AppLinks />
				</Row>
			</Content>
			<AppFooter />
		</Layout>
	);
}

export default App;
