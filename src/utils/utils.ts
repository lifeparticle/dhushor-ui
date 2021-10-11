import { notification } from "antd";
import { useState, useEffect } from "react";

import { NOOPENER_NOREFERRER, TAGS } from "../constants/constants";

export const openInNewTab = (url: string, tab: string = "_blank") => {
	const newWindow = window.open(url, tab, NOOPENER_NOREFERRER);
	if (newWindow) newWindow.opener = null;
};

export const filterTags = (value: string): any => {
	for (const [key, val] of Object.entries(TAGS)) {
		if (key.includes(value)) {
			return val;
		}
	}
	return [];
};

export const tagArray: any = () => {
	let topics: any[] = [];
	Object.values(TAGS).forEach((tag_obejct) => {
		Object.values(tag_obejct).forEach((v) => {
			topics.push(v);
		});
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
	const [searchedValue, setSearchedValue] = useState("programming");

	useEffect(() => {
		onImageSearch("programming");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onImageSearch = async (query: string, page?: number) => {
		try {
			setPhotos([]);
			setIsLoading(true);
			setError(false);
			const data = await api.getImage(query, page);
			setPhotos(data);
		} catch (err) {
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
