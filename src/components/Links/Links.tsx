import React from "react";
import { Col, Button } from "antd";
import { links } from "../../constants/constants";
import { openInNewTab } from "../../utils/utils";

export const AppLinks: React.FC = () => {
	return (
		<>
			{links.map((link) => {
				return link.enable ? (
						<Col span={4} key={link.key}>
						<Button 
						type="primary" 
						shape="round"
						size="large"
						icon={<link.cover style={{marginRight:10}} />}
						onClick={() => openInNewTab(link.link)}>
							{link.title}
						</Button>
					</Col>
				) : null;
			})}
		</>
	);
};
