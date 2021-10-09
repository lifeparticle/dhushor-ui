import { Col, Row, Pagination, Image, Space } from "antd";
import PexelsApi from "../../api/PexelsApi";
import UnsplashApi from "../../api/UnsplashApi";
import { UnsplashInterface, total } from "../../api/UnsplashApi";
import { PexelsInterface, total_results } from "../../api/PexelsApi";
import { useApi } from "../../utils/utils";
import { SearchImage } from "../Search/SearchImage";

export const ImageLoader: React.FC = () => {
	const [
		onImageSearchU,
		photosU,
		isLoadingU,
		errorU,
		searchedValueU,
		setSearchedValueU,
	] = useApi<UnsplashInterface[]>(new UnsplashApi());

	const [
		onImageSearchP,
		photosP,
		isLoadingP,
		errorP,
		searchedValueP,
		setSearchedValueP,
	] = useApi<PexelsInterface[]>(new PexelsApi());

	return (
		<>
			<Col span={12}>
				<SearchImage
					setSearchedValue={setSearchedValueU}
					onImageSearch={onImageSearchU}
					isLoading={isLoadingU}
					photos={photosU}
				/>
				<Space direction="vertical" size="large"> 
					<Image.PreviewGroup>
						<Space wrap>
							{photosU &&
								photosU.map((photo: any) => {
									return <Image width={200} src={photo.urls["regular"]} />;
								})}
						</Space>
					</Image.PreviewGroup>
				
					<Row justify="center">
						<Pagination
							total={total}
							showTotal={(totals) => `Total ${totals} items`}
							defaultCurrent={1}
							defaultPageSize={12}
							showSizeChanger={false}
							onChange={(pageNum) => {
								onImageSearchU(searchedValueU, pageNum);
							}}
						/>
					</Row>
				</Space>
			</Col>

			<Col span={12}>
				<SearchImage
					setSearchedValue={setSearchedValueP}
					onImageSearch={onImageSearchP}
					isLoading={isLoadingP}
					photos={photosP}
				/>
				<Space direction="vertical" size="large">
					<Image.PreviewGroup>
						<Space wrap>
							{photosP &&
								photosP.map((photo: any) => {
									return <Image width={200} src={photo.src["large"]} />;
								})}
						</Space>
					</Image.PreviewGroup>

					<Row justify='center'>
						<Pagination
							total={total_results}
							showTotal={(totals) => `Total ${totals} items`}
							defaultCurrent={1}
							defaultPageSize={12}
							showSizeChanger={false}
							onChange={(pageNum) => {
								onImageSearchP(searchedValueP, pageNum);
							}}
						/>
					</Row>
				</Space>
			</Col>
		</>
	);
};