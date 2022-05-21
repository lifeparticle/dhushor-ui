import { httpGet } from "./Config";

export interface PexelsInterface {
	avg_color: string;
	height: number;
	id: number;
	liked: boolean;
	photographer: string;
	photographer_id: number;
	photographer_url: string;
	src: any;
	url: string;
	width: number;
}

export let total_results = 0;

class PexelsApi {
	getImage = async (query: string, page?: number) => {
		const url = `https://dhushor-985rkpuxo-lifeparticle.vercel.app/api/index?name=pexels&page=${page}&query=${query}`;
		const res = await httpGet(url);
		total_results = res.total_results;
		return res.photos;
	};
}

export default PexelsApi;
