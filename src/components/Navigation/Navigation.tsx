import { Layout, Menu } from "antd";
import { BrowserRouter, Link } from "react-router-dom";
import { ROUTING_URLS } from "../../constants/constants";
const { Header } = Layout;

export const AppNavigation: React.FC = () => {
	return (
		<BrowserRouter>
			<Header>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={["1"]}
				>
					<Menu.Item key="1" data-testid="homeNav">
						<Link to={ROUTING_URLS.home}>Home</Link>
					</Menu.Item>
					<Menu.Item key="2" data-testid="aboutNav">
						<Link to={ROUTING_URLS.about}>About</Link>
					</Menu.Item>
				</Menu>
			</Header>
		</BrowserRouter>
	);
};
