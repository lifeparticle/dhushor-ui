import React from "react";
import { Card, Space, Col } from "antd";
import { links } from "../../constants/constants";
import Links from "./Links.module.css";
import { openInNewTab } from "../../utils/utils";
const { Meta } = Card;

export const AppLinks: React.FC = () => {
	return (
		<>
			{links.map((link) => {
				return link.enable ? (
					<Col span={4} key={link.key}>
						<div className={Links.container}>
							<Card
								size="small"
								className={Links.card}
								hoverable
								cover={<link.cover />}
								onClick={() => openInNewTab(link.link)}
							>
								<Meta title={link.title} description={link.description} />
							</Card>
						</div>
					</Col>
				) : null;
			})}
		</>
	);
};
