import React from "react";
import { Space, Button } from "antd";
import { links } from "../../constants/constants";
import { openInNewTab } from "../../utils/utils";

export const AppLinks: React.FC = () => {
	return (
		<Space wrap>
			{links.map((link) => {
				return link.enable ? (
					<Button
						type="primary"
						shape="round"
						size="large"
						icon={<link.cover style={{ marginRight: 10 }} />}
						onClick={() => openInNewTab(link.link)}
					>
						{link.title}
					</Button>
				) : null;
			})}
		</Space>
	);
};
