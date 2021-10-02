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

class PexelsApi {
	getImage = async (query: string) => {
		const url = `https://api.pexels.com/v1/search?query=${query}&per_page=10`;
		const headers = { headers: { Authorization: "563492ad6f917000010000019963db525bd445018f7b107d172891ea" } };

		// {
		// 	headers: {
		// 	  Authorization: "YOUR_API_KEY"
		// 	}
		//   }

		const res = await httpGet(url, headers);
		// console.log("res ", res);

		return res.photos;
	};
}

export default PexelsApi;
