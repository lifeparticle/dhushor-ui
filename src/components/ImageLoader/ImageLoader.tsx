import { Col, Input, Image } from "antd";
import { useEffect, useState } from "react";
import PexelsApi from "../../api/PexelsApi";
import UnsplashApi from "../../api/UnsplashApi";
import {UnsplashInterface} from "../../api/UnsplashApi";


const { Search } = Input;

export const ImageLoader: React.FC = () => {
	const [data, setData] = useState(null);
	const [photos, setPhotos] = useState <UnsplashInterface>();

	useEffect(() => {
		// setData(new PexelsApi.getImage());
		// setPhotos(new UnsplashApi.getImage("random"));
	});
	
	const onUnsplashSearch = async (query: string) => {
		const unsplash = new UnsplashApi();
		const photos1 = await unsplash.getImage(query);
		// console.log(photos1)
		// setPhotos(photos1);
	};

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
					onSearch={onUnsplashSearch}
					size="large"
				/>
				<br />
				<br />
				<br />
				<Image.PreviewGroup>
					{
						// photos.map((photo) => {
						// 	<div>
						// 		<Image
						// 		width={200}
						// 		src={photo.urls.thumb}/>
						// 	</div>
						// })
					}
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
					{
					// 	photos.map((photo) => {
					// 		console.log(photo.src.original);
					// 		<div>
					// 			<Image
					// 				width={200}
					// 				src={photo.src.original}
					// />
					// 		</div>
					// 	})
					}
					
					<Image
						width={200}
						src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
					/>
				</Image.PreviewGroup>
			</Col>
		</>
	);
};
