import { notification } from "antd";

import { NOOPENER_NOREFERRER, tags } from "../constants/constants";
// look into NOOPENER_NOREFERRER

export const openInNewTab = (url: string, tab: string = "_blank") => {
	const newWindow = window.open(url, tab, NOOPENER_NOREFERRER);
	if (newWindow) newWindow.opener = null;
};

export const filterTags = (value: string): any => {
	for (const [key, val] of Object.entries(tags)) {
		if (key.includes(value)) {
			return val;
		}
	}
	return [""];
};

export const tagArray: any = () => {
	let topics: any[] = [];
	Object.values(tags).forEach((tag) => {
		topics.push(...tag);
	});
	return topics;
};

export const openNotification = () => {
	notification.open({
		message: "Copied",
		onClick: () => {},
	});
};
