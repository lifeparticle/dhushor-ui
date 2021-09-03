import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { ROUTING_URLS } from "../../constants/constants";
const { Header } = Layout;

export const AppNavigation: React.FC = () => {
	return (
		<Header>
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
				<Menu.Item key="1">
					<Link to={ROUTING_URLS.home}>Home</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to={ROUTING_URLS.about}>About</Link>
				</Menu.Item>
			</Menu>
		</Header>
	);
};
