import { useState } from "react";
import { Col, Input, AutoComplete, Tag, Button } from "antd";
import { SelectProps } from "antd/es/select";
import { CopyOutlined } from "@ant-design/icons";

function getRandomInt(max: number, min: number = 0) {
	return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}
const searchResult = (query: string) =>
	new Array(getRandomInt(5))
		.join(".")
		.split(".")
		.map((_, idx) => {
			const category = `${query}${idx}`;
			return {
				value: category,
				label: (
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<span>
							Found {query} on{" "}
							<a
								href={`https://s.taobao.com/search?q=${query}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								{category}
							</a>
						</span>
						<span>{getRandomInt(200, 100)} results</span>
					</div>
				),
			};
		});

export const CaseConverter: React.FC = () => {
	const [options, setOptions] = useState<SelectProps<object>["options"]>([]);

	const handleSearch = (value: string) => {
		setOptions(value ? searchResult(value) : []);
	};

	const onSelect = (value: string) => {
		console.log("onSelect", value);
	};

	return (
		<>
			<Col span={20}>
				<Input placeholder="Basic usage" />
				<Button
					type="primary"
					shape="round"
					icon={<CopyOutlined />}
					size="large"
				>
					Download
				</Button>
			</Col>
			<Col span={4}>
				<AutoComplete
					dropdownMatchSelectWidth={252}
					style={{ width: 300 }}
					options={options}
					onSelect={onSelect}
					onSearch={handleSearch}
				>
					<Input.Search size="large" placeholder="input here" enterButton />
				</AutoComplete>
				<div>
					<Tag color="magenta">magenta</Tag>
					<Tag color="red">red</Tag>
					<Tag color="volcano">volcano</Tag>
					<Tag color="orange">orange</Tag>
					<Tag color="gold">gold</Tag>
					<Tag color="lime">lime</Tag>
					<Tag color="green">green</Tag>
					<Tag color="cyan">cyan</Tag>
					<Tag color="blue">blue</Tag>
					<Tag color="geekblue">geekblue</Tag>
					<Tag color="purple">purple</Tag>
				</div>
			</Col>
		</>
	);
};
