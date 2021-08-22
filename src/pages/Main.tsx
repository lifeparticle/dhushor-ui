import { AppLinks } from "../components/Links/Links";
import { CaseConverter } from "../components/CaseConverter/CaseConverter";
import { ImageLoader } from "../components/ImageLoader/ImageLoader";
export const Main: React.FC = () => {
	return (
		<>
			<CaseConverter></CaseConverter>
			<ImageLoader></ImageLoader>
			<AppLinks></AppLinks>
		</>
	);
};
