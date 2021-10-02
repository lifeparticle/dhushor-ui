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
}

class UnsplashApi {
    clientId = "7O6rhxCZTJUm_tJ2nFhwAlbCXo_oGfxkcrn8LzPNPVU";

    getImage = async (query: string) => {
        const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${this.clientId}`;

        const res = await httpGet(url);
        // console.log(res);

        return res.results;
    };
}

export default UnsplashApi;
