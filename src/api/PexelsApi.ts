import { httpGet } from "./Config";

export interface PexelsInterface {
	avg_color: string
	height: number
	id: number
	liked: boolean
	photographer: string
	photographer_id: number
	photographer_url: string
	src: any
	url: string
	width: number
}

export let total_results = 0;

class PexelsApi {
	getImage = async (query: string, page?: number) => {
		const url = `https://api.pexels.com/v1/search?query=${query}&per_page=12&orientation=landscape&page=${page}`;
		const headers = { headers: { Authorization: "563492ad6f917000010000019963db525bd445018f7b107d172891ea" } };

		const res = await httpGet(url, headers);
		// console.log("res ", res);
		total_results = res.total_results;

		return res.photos;
	};
}

export default PexelsApi;
