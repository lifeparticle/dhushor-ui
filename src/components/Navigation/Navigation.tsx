import { Layout, Menu } from "antd";
const { Header } = Layout;

export const AppNavigation: React.FC = () => {
	return (
		<Header>
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
				<Menu.Item key="1">one</Menu.Item>
				<Menu.Item key="2">two</Menu.Item>
				<Menu.Item key="3">three</Menu.Item>
			</Menu>
		</Header>
	);
};
