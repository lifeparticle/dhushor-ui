import { NOOPENER_NOREFERRER } from "../constants/constants";
// look into NOOPENER_NOREFERRER

export const openInNewTab = (url: string, tab: string = "_blank") => {
	const newWindow = window.open(url, tab, NOOPENER_NOREFERRER);
	if (newWindow) newWindow.opener = null;
};

export const convertCase = (text: string) => {
	return "";
};
