import { useEffect, useState } from "react";
import { Col, Input, AutoComplete, Tag, Row, Space } from "antd";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import { tagArray, filterTags, openNotification } from "../../utils/utils";
import { AppLinks } from "../Links/Links";

const { Search } = Input;
const { CheckableTag } = Tag;

const apCase = require("@lifeparticle/ap-style-title-case");

export const CaseConverter: React.FC = () => {
	const [title, setTitle] = useState("");
	const [isCopied, setIsCopied] = useState(false);
	const [currentTagArray, setCurrentTagArray] = useState([]);

	useEffect(() => {
		setCurrentTagArray(tagArray());
	}, []);

	const handleSearch = (value: string) => {
		value === ""
			? setCurrentTagArray(tagArray())
			: setCurrentTagArray(filterTags(value.toLowerCase()));
	};

	const copyToClipBoard = (text: string, setState?: any) => {
		if (setState) {
			setState(true);
			setTimeout(() => {
				setState(false);
			}, 1000);
		}
		navigator.clipboard.writeText(text);
		openNotification();
	};

	return (
		<>
			<Col span={8}>
				<Row>
					<Input
						data-testid="titleinput"
						size="large"
						allowClear
						placeholder="Enter Your Title"
						onChange={(e) => setTitle(apCase(e.target.value))}
					/>
				</Row>
				<br />
				<Row>
					<Search
						data-testid="titleoutput"
						placeholder=""
						enterButton={
							isCopied ? <CheckOutlined /> : <CopyOutlined />
						}
						size="large"
						value={title}
						onSearch={(value) => {
							copyToClipBoard(value, setIsCopied);
						}}
					/>
				</Row>
			</Col>

			<Col span={8}>
				<Row>
					<AutoComplete
						style={{ width: "-webkit-fill-available" }}
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
				<Row style={{ overflow: "auto", height: "150px" }}>
					<Space wrap>
						{currentTagArray.map((tag) => {
							return Object.keys(tag).map(function (key) {
								return (
									<CheckableTag
										key={key}
										onClick={() =>
											copyToClipBoard(tag[key])
										}
										checked={true}
									>
										{tag[key]}
									</CheckableTag>
								);
							});
						})}
					</Space>
				</Row>
			</Col>
			<Col span={8}>
				<AppLinks />
			</Col>
		</>
	);
};
