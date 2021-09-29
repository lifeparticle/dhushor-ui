import { httpGet } from "./Config";

class PexelsApi {
	getImage = (query: string) => {
		const url = `https://api.pexels.com/v1/search?query=${query}`

		const test = httpGet(url)
		console.log(test);

		return test;
	};
}

export default PexelsApi;
