export const call = async (request: any) => {
	let response: any = await fetch(request);

	try {
		response = await response.json();
	} catch (ex) {}

	return response;
};

export const httpGet = async (url: string) => {
	return await call(url);
};
