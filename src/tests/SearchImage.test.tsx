import React from "react";
import { screen, render } from "@testing-library/react";
import { SearchImage } from "../components/SearchImage/SearchImage";

test("Image Search Box loads Fine", () => {
	render(
		<SearchImage
			setSearchedValue={jest.fn()}
			onImageSearch={jest.fn()}
			isLoading={false}
			photos={[]}
			placeHolder={"hello"}
		/>
	);
	const gistGithubBt = screen.getByTestId(/searchbox/i);
	expect(gistGithubBt).toBeInTheDocument;
});
