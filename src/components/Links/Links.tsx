import React from "react";
import { Card } from "antd";
import { links } from "../../constants/constants";
import Links from "./Links.module.css";
import { openInNewTab } from "../../utils/utils";
const { Meta } = Card;

export const AppLinks: React.FC = () => {
	return (
		<>
			{links.map((link) => {
				return link.enable ? (
					<Card
						hoverable
						cover={<link.cover />}
						onClick={() => openInNewTab(link.link)}
					>
						<Meta
							className={Links.card_title}
							title={link.title}
							description={link.description}
						/>
					</Card>
				) : null;
			})}
		</>
	);
};
