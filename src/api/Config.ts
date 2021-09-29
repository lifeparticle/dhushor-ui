import axios from "axios";

export const call = () => { };

export const httpGet = (url: string, b?: string) => {
    // fetch(url, {
    //     headers: {
    //         Authorization: "563492ad6f917000010000019963db525bd445018f7b107d172891ea"
    //     }
    // })
    //     .then(resp => {
    //         return resp.json()
    //     })
    //     .then(datas => {
    //         const data = datas.photos;
    //         console.log(data);
    //         return data;
    //     })

    //  Unsplash
    axios.get(url).then((response) => {
        console.log(response.data);

        return response.data.results;
    });
};

export { };
