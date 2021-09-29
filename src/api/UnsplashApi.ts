import { createApi } from "unsplash-js";
import { httpGet } from "./Config";

export interface UnsplashInterface {
    urls: string;
}

class UnsplashApi {
    clientId = "7O6rhxCZTJUm_tJ2nFhwAlbCXo_oGfxkcrn8LzPNPVU";

    getImage = (query: string) => {
        const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${this.clientId}`;

        const test = httpGet(url)
        // console.log(test);

        return test;
    };
}

export default UnsplashApi;






// const onSearch = (query: string) => {
//     unsplash.search
//         .getPhotos({
//             query: query,
            // page: 1,
            // perPage: 10,
            // color: 'green',
            // orientation: 'portrait',
//         })
//         .then(result => {
//             if (result.errors) {
                // handle error here
//                 console.log('error occurred: ', result.errors[0]);
//             } else {
                // handle success here
//                 const photos = result.response.results;
//                 console.log(photos);
                // setPhotos(photos);
//             }
//         });
// };
//     <Image.PreviewGroup>
//     {
//         Object.entries(photos).map(item => {
//         })
//     }
// </Image.PreviewGroup>


// const [photos, setPhotos] = useState<any[]>([]);

// useEffect(() => {
    // setData(new PexelsApi.getImage());
//     const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${clientId}`;

//     axios.get(url).then((response) => {
        // console.log(response);
//         setPhotos(response.data.results);
//     });
// });



// const onSearch = (query: string) => {


//     
// };