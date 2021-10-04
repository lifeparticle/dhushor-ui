import { Input, Image, Space } from "antd";
const { Search } = Input;

interface SearchImageprops {
	setSearchedValue: any;
	onImageSearch: any;
	isLoading: boolean;
	photos: any[];
}

export const SearchImage: React.FC<SearchImageprops> = ({
	setSearchedValue,
	onImageSearch,
	isLoading,
	photos,
}) => {
	return (
		<>
			<Search
				onChange={(e) => setSearchedValue(e.target.value)}
				enterButton
				placeholder="Unsplash"
				onSearch={(value) => {
					onImageSearch(value, true);
				}}
				size="large"
				loading={isLoading}
			/>
			<br />
			<br />
			<br />
		</>
	);
};
