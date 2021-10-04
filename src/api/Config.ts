export const call = async (url: string, headers?: object) => {
    // console.log(headers);

    let response: any = await fetch(url, headers);

    try {
        response = await response.json();
    } catch (ex) { console.log(ex); }

    return response;
};

export const httpGet = async (url: string, headers?: object) => {
    return await call(url, headers);
};
