import { useState } from "react";
import { Col, Input, AutoComplete, Tag, Row, Space } from "antd";
import { SelectProps } from "antd/es/select";
import { CopyOutlined } from "@ant-design/icons";
import { tags } from "../../constants/constants";
const { Search } = Input;
const { CheckableTag } = Tag;

const apCase = require("@lifeparticle/ap-style-title-case");

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
	const [title, setTitle] = useState("");

	const [options, setOptions] = useState<SelectProps<object>["options"]>([]);

	const handleSearch = (value: string) => {
		setOptions(value ? searchResult(value) : []);
	};

	const onSelect = (value: string) => {
		console.log("onSelect", value);
	};

	const handleChange = (tag: string) => {
		console.log(tag);
	};

	return (
		<>
			<Col span={18}>
				<Row>
					<Input
						size="large"
						allowClear
						placeholder="Enter Your Title"
						onChange={(e) => setTitle(apCase(e.target.value))}
					/>
				</Row>
				<br />
				<Row>
					<Search
						placeholder=""
						enterButton={<CopyOutlined />}
						size="large"
						value={title}
					/>
				</Row>
			</Col>

			<Col span={6}>
				<Row>
					<AutoComplete
						style={{ width: "-webkit-fill-available" }}
						options={options}
						onSelect={onSelect}
						onSearch={handleSearch}
					>
						<Search
							size="large"
							placeholder="Search Topics, E.g. Programming"
							enterButton
						/>
					</AutoComplete>
				</Row>
				<br />
				<Row>
					<Space wrap>
						{tags.map((tag) => {
							return (
								<CheckableTag onChange={() => handleChange(tag)} checked={true}>
									{tag}
								</CheckableTag>
							);
						})}
					</Space>
				</Row>
			</Col>
		</>
	);
};
