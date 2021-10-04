import { Row, Divider } from "antd";

import { CaseConverter } from "../components/CaseConverter/CaseConverter";
import { ImageLoader } from "../components/ImageLoader/ImageLoader";
const Home: React.FC = () => {
	return (
		<>
			<Row gutter={16}>
				<CaseConverter />
			</Row>
			<Divider orientation="left" plain>
				Image
			</Divider>
			<Row gutter={16}>
				<ImageLoader />
			</Row>
		</>
	);
};

export default Home;
