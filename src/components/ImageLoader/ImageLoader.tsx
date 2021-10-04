import { Col, Input, Image, Space, Pagination } from "antd";
import { useEffect, useState } from "react";
import PexelsApi from "../../api/PexelsApi";
import UnsplashApi from "../../api/UnsplashApi";
import { UnsplashInterface, total } from "../../api/UnsplashApi";
import { PexelsInterface } from "../../api/PexelsApi";

const { Search } = Input;

export const ImageLoader: React.FC = () => {
	const [unsplashPhotos, setUnsplashPhotos] = useState<UnsplashInterface[]>();
	const [pexelsPhotos, setPexelsPhotos] = useState<PexelsInterface[]>();
	const [isLaoding, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const onImageSearch = async (query: string, isUnsplash:boolean, page?:number) => {
		// setLoading(false);

		let images = null;
		
		if (isUnsplash) {
			const unsplash = new UnsplashApi();
			images = await unsplash.getImage(query, page);
			// console.log(images);
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

	const onUnsplashPageChange = async (page:number) => {
		// console.log(page)
		const pic = await onImageSearch('arts',true,page);
		setUnsplashPhotos(pic);
	}

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
							(unsplashPhotos).map((photo) => {
								return <Image width={200} src={photo.urls["regular"]} />;
							})}
					</Space>
					<Pagination
						total={total}
						showTotal={totals => `Total ${totals} items`}
						defaultCurrent={1}
						defaultPageSize={12}
						showSizeChanger={false}
						onChange={onUnsplashPageChange}
					/>
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
								return <Image width={200} src={photo.src['large']} />;
							})}
					</Space>
				</Image.PreviewGroup>
			</Col>
		</>
	);
};
