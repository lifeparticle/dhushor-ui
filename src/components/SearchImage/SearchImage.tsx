import { Input } from "antd";
const { Search } = Input;

interface SearchImageprops {
	setSearchedValue: any;
	onImageSearch: any;
	isLoading: boolean;
	photos: any[];
	placeHolder: string;
}

export const SearchImage: React.FC<SearchImageprops> = ({
	setSearchedValue,
	onImageSearch,
	isLoading,
	photos,
	placeHolder,
}) => {
	return (
		<>
			<Search
				onChange={(e) => setSearchedValue(e.target.value)}
				enterButton
				placeholder={placeHolder}
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
