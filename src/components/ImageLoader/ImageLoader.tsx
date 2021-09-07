import { Col, Input, Image } from "antd";
const { Search } = Input;

export const ImageLoader: React.FC = () => {
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
