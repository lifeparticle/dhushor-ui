import { Row, Divider } from "antd";
import { AppLinks } from "../components/Links/Links";
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
			<Row>
				<ImageLoader />
			</Row>
			<Divider orientation="left" plain>
				Helpful Links
			</Divider>
			<Row className="link-row" gutter={16}>
				<AppLinks />
			</Row>
		</>
	);
};

export default Home;
