import React from "react";
import { Card, Space } from "antd";
import { links } from "../../constants/constants";
import Links from "./Links.module.css";
import { openInNewTab } from "../../utils/utils";
const { Meta } = Card;

export const AppLinks: React.FC = () => {
	return (
		<>
			{links.map((link) => {
				return link.enable ? (
					<div className={Links.container}>
						<Card
						className={Links.card}
						hoverable
						cover={<link.cover />}
						onClick={() => openInNewTab(link.link)}
						bodyStyle={{width:200}}
					>
						<Space align='center'>
							<Meta
							title={link.title}
							description={link.description}
						/>
						</Space>
					</Card>
					</div>
				) : null;
			})}
		</>
	);
};
