import { Col, Input, Image, Space } from "antd";
import { useEffect, useState } from "react";
import PexelsApi from "../../api/PexelsApi";
import UnsplashApi from "../../api/UnsplashApi";
import { UnsplashInterface } from "../../api/UnsplashApi";
import { PexelsInterface } from "../../api/PexelsApi";

const { Search } = Input;

export const ImageLoader: React.FC = () => {
	// const [data, setData] = useState(null);
	const [unsplashPhotos, setUnsplashPhotos] = useState<UnsplashInterface[]>();
	const [pexelsPhotos, setPexelsPhotos] = useState<PexelsInterface[]>();
	const [isLaoding, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const onImageSearch = async (query: string, isUnsplash:boolean) => {
		// setLoading(false);

		let images = null;
		
		if (isUnsplash) {
			const unsplash = new UnsplashApi();
			images = await unsplash.getImage(query);
		}
		else{
			const pexels = new PexelsApi();
			images = await pexels.getImage(query);
		}

		// setLoading(true);

		return images;
	}

	useEffect(() => {
		onImageSearch("programming",true).then((data) => {
			setUnsplashPhotos(data);
		});

		onImageSearch("programming",false).then((data) => {
			setPexelsPhotos(data);
		});
	}, []);

	return (
		<>
			<Col span={12}>
				<Search
					enterButton
					placeholder="Unsplash"
					onSearch={(value) => {
						onImageSearch(value,true).then((data) => {
							setUnsplashPhotos(data);
						});
					}}
					size="large"
				/>
				<br />
				<br />
				<br />
				
				<Image.PreviewGroup>
					<Space wrap>
						{unsplashPhotos &&
							unsplashPhotos.map((photo) => {
								return <Image width={200} src={photo.urls["thumb"]} />;
							})}
					</Space>
				</Image.PreviewGroup>
				
			</Col>
			<Col span={12}>
				<Search
					enterButton
					placeholder="Pexels"
					onSearch={(value) => {
						onImageSearch(value,false).then((data) => {
							setPexelsPhotos(data);
						});
					}}
					size="large"
				/>
				<br />
				<br />
				<br />
				<Image.PreviewGroup>
					<Space wrap>
						{pexelsPhotos &&
							pexelsPhotos.map((photo) => {
								return <Image width={200} src={photo.src['medium']} />;
							})}
					</Space>
				</Image.PreviewGroup>
			</Col>
		</>
	);
};
