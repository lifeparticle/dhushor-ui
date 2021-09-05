import { useState } from "react";
import { Col, Input, AutoComplete, Tag, Button, Row } from "antd";
import { SelectProps } from "antd/es/select";
import { CopyOutlined } from "@ant-design/icons";

const apCase = require("@lifeparticle/ap-style-title-case")

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

	return (
		<>
			<Col span={18}>
				<Row>
					<Input
						size="large"
						allowClear
						placeholder="Enter Your Title"
						onChange={(e) => setTitle(prevState => (apCase(e.target.value)))}
					/>
				</Row>
				<Row>
					<Input size="large" placeholder="Output" value={title} />
				</Row>

				<Row>
					<Button
						type="primary"
						shape="round"
						icon={<CopyOutlined />}
						size="large"
					>
						Copy To Clipboard
					</Button>
				</Row>
			</Col>

			<Col span={6}>
				<AutoComplete
					style={{ width: "-webkit-fill-available" }}
					options={options}
					onSelect={onSelect}
					onSearch={handleSearch}
				>
					<Input.Search size="large" placeholder="Search Tags" enterButton />
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
