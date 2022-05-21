import { httpGet } from "./Config";

export interface UnsplashInterface {
	alt_description: string;
	blur_hash: string;
	categories: any;
	color: string;
	created_at: string;
	current_user_collections: any;
	description: string;
	height: number;
	id: string;
	liked_by_user: number;
	likes: number;
	links: any;
	promoted_at: string;
	sponsorship: string;
	tags: any;
	topic_submissions: any;
	updated_at: string;
	urls: any;
	user: any;
	width: number;
	results: any;
	total: number;
	total_pages: number;
}

export let total = 0;

class UnsplashApi {
	clientId = "";

	getImage = async (query: string, page?: number) => {
		const url = `https://dhushor-api-kappa.vercel.app/api/index?name=unsplash&page=${page}&query=${query}`;
		const res = await httpGet(url);
		total = res.total;
		return res.results;
	};
}

export default UnsplashApi;
