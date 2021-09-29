import { Col, Input, Image } from "antd";
import { useEffect, useState } from "react";
import PexelsApi from "../../api/PexelsApi";
import UnsplashApi from "../../api/UnsplashApi";
import { UnsplashInterface } from "../../api/UnsplashApi";

const { Search } = Input;

export const ImageLoader: React.FC = () => {
	const [data, setData] = useState(null);
	const [photos, setPhotos] = useState<UnsplashInterface[]>();
	const [isLaoding, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const onUnsplashSearch = async (query: string) => {
		// setLoading(false);
		const unsplash = new UnsplashApi();
		const photos1 = await unsplash.getImage(query);
		console.log("photos1", photos && photos[0].urls["thumb"]);
		return photos1;
		// setLoading(true);
	};

	useEffect(() => {
		onUnsplashSearch("programming").then((data) => {
			setPhotos(data);
		});
	}, []);

	const onPexelsSearch = (query: string) => {
		const pexels = new PexelsApi();
		const photos1 = pexels.getImage(query);

		// setPhotos(photos1);
	};

	return (
		<>
			<Col span={12}>
				<Search
					enterButton
					placeholder="Unsplash"
					onSearch={(data) => {
						onUnsplashSearch(data).then((data) => {
							setPhotos(data);
						});
					}}
					size="large"
				/>
				<br />
				<br />
				<br />
				<Image.PreviewGroup>
					{photos &&
						photos.map((photo) => {
							return <Image width={200} src={photo.urls["thumb"]} />;
						})}
				</Image.PreviewGroup>
			</Col>
			<Col span={12}>
				<Search
					enterButton
					placeholder="Pexels"
					onSearch={onPexelsSearch}
					size="large"
				/>
				<br />
				<br />
				<br />
				<Image.PreviewGroup>
					{photos &&
						photos.map((photo) => {
							return <Image width={200} src={photo.urls["thumb"]} />;
						})}
				</Image.PreviewGroup>
			</Col>
		</>
	);
};
