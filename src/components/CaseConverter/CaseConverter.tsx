import { useEffect, useState } from "react";
import { Col, Input, AutoComplete, Tag, Row, Space } from "antd";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import { tagArray, filterTags } from "../../utils/utils";

const { Search } = Input;
const { CheckableTag } = Tag;
const { CopyToClipboard } = require("react-copy-to-clipboard");

const apCase = require("@lifeparticle/ap-style-title-case");

export const CaseConverter: React.FC = () => {
	const [title, setTitle] = useState("");
	const [isCopied, setIsCopied] = useState(false);
	const [currentTagArray, setCurrentTagArray] = useState([])

	useEffect(() => {
		setCurrentTagArray(tagArray())
	},[])	

	const handleSearch = (value: string) => {
		value === '' ? setCurrentTagArray(tagArray()) : setCurrentTagArray(filterTags(value.toLowerCase()))
	};

	const onCopyTitle = () => {
		setIsCopied(true);
		setTimeout(() => {
		  setIsCopied(false);
		}, 1000);
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
						enterButton={
						<CopyToClipboard text={title} onCopy={onCopyTitle}>
							{isCopied ? <CheckOutlined /> : <CopyOutlined/>}
						</CopyToClipboard>
					}
						size="large"
						value={title}
					/>
				</Row>
			</Col>

			<Col span={6}>
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
				<Row style={{ overflow: "auto", height: "150px"}}>	
					<Space wrap>				
						{currentTagArray.map((tag) => {
							return (
								<CheckableTag
								onClick={() => navigator.clipboard.writeText(tag)} 
								checked={true}>
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
