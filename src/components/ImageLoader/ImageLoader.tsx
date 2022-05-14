import { Skeleton, Col, Row, Pagination, Image, Space, Alert } from "antd";
import PexelsApi from "../../api/PexelsApi";
import UnsplashApi from "../../api/UnsplashApi";
import { UnsplashInterface, total } from "../../api/UnsplashApi";
import { PexelsInterface, total_results } from "../../api/PexelsApi";
import { useApi } from "../../utils/utils";
import { SearchImage } from "../SearchImage/SearchImage";

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
					data-testid="searchboxu"
					setSearchedValue={setSearchedValueU}
					onImageSearch={onImageSearchU}
					isLoading={isLoadingU}
					photos={photosU}
					placeHolder="unsplash"
				/>
				<Space direction="vertical" size="large">
					<Image.PreviewGroup data-testid="unsplash-gallery">
						<Space wrap>
							{isLoadingU &&
								Array.from({ length: 12 }, (_, k) => (
									<Skeleton.Image
										key={k}
										style={{
											height: "133px",
											width: "200px",
										}}
									/>
								))}
							{errorU && (
								<Alert
									message="Error"
									description="Something bad happend"
									type="error"
									showIcon
								/>
							)}
							{photosU &&
								photosU.map((photo: any) => {
									return (
										<Image
											key={photo.id}
											width={200}
											src={photo.urls["regular"]}
										/>
									);
								})}
						</Space>
					</Image.PreviewGroup>

					<Row justify="center">
						<Pagination
							data-testid="paginationu"
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
					data-testid="searchboxp"
					setSearchedValue={setSearchedValueP}
					onImageSearch={onImageSearchP}
					isLoading={isLoadingP}
					photos={photosP}
					placeHolder="pexels"
				/>
				<Space direction="vertical" size="large">
					<Image.PreviewGroup data-testid="pexels-gallery">
						<Space wrap>
							{isLoadingP &&
								Array.from({ length: 12 }, (_, k) => (
									<Skeleton.Image
										key={k}
										style={{
											height: "133px",
											width: "200px",
										}}
									/>
								))}
							{errorP && (
								<Alert
									message="Error"
									description="Something bad happend"
									type="error"
									showIcon
								/>
							)}
							{photosP &&
								photosP.map((photo: any) => {
									return (
										<Image
											key={photo.id}
											width={200}
											src={photo.src["large"]}
										/>
									);
								})}
						</Space>
					</Image.PreviewGroup>

					<Row justify="center">
						<Pagination
							data-testid="paginationp"
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
