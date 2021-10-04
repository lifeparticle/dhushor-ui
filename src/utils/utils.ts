import { notification } from "antd";
import { useState, useEffect } from "react";

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

export const useApi = <T>(
	api: any
): [any, any, boolean, boolean, string, any] => {
	const [photos, setPhotos] = useState<T[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [searchedValue, setSearchedValue] = useState("");

	useEffect(() => {
		onImageSearch("programming");
	}, []);

	const onImageSearch = async (query: string, page?: number) => {
		try {
			setIsLoading(true);
			setError(false);
			const data = await api.getImage(query, page);
			setPhotos(data);
		} catch (error) {
			setError(true);
		} finally {
			setIsLoading(false);
		}
	};

	return [
		onImageSearch,
		photos,
		isLoading,
		error,
		searchedValue,
		setSearchedValue,
	];
};
