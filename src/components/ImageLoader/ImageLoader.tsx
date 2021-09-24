import { Col, Input, Image } from "antd";
import { useEffect, useState } from "react";
import PexelsApi from "../../api/PexelsApi";

const { Search } = Input;

export const ImageLoader: React.FC = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		// setData(new PexelsApi.getImage());
	});
	const onSearch = () => {};
	return (
		<>
			<Col span={12}>
				<Search
					enterButton
					placeholder="input search text"
					onSearch={onSearch}
					size="large"
				/>
				<br />
				<br />
				<br />
				<Image.PreviewGroup>
					<Image
						width={200}
						src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
					/>
					<Image
						width={200}
						src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
					/>
				</Image.PreviewGroup>
			</Col>
			<Col span={12}>
				<Search
					enterButton
					placeholder="input search text"
					onSearch={onSearch}
					size="large"
				/>
				<br />
				<br />
				<br />
				<Image.PreviewGroup>
					<Image
						width={200}
						src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
					/>
					<Image
						width={200}
						src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
					/>
				</Image.PreviewGroup>
			</Col>
		</>
	);
};
