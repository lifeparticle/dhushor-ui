import { httpGet } from "./Config";

export interface UnsplashInterface {
	alt_description: any;
	blur_hash: any;
	categories: any;
	color: any;
	created_at: any;
	current_user_collections: any;
	description: any;
	height: any;
	id: any;
	liked_by_user: any;
	likes: any;
	links: any;
	promoted_at: any;
	sponsorship: any;
	tags: any;
	topic_submissions: any;
	updated_at: any;
	urls: any;
	user: any;
}

class UnsplashApi {
	clientId = "7O6rhxCZTJUm_tJ2nFhwAlbCXo_oGfxkcrn8LzPNPVU";

	getImage = async (query: string) => {
		const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${this.clientId}`;
		const test = await httpGet(url);
		console.log(test);
		return test.results;
	};
}

export default UnsplashApi;
