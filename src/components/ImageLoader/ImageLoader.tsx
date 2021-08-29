import { Col, Input, Image } from "antd";

export const ImageLoader: React.FC = () => {
	return (
		<>
			<Col span={12}>
				<Input placeholder="Basic usage" />
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
				<Input placeholder="Basic usage" />
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
