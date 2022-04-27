import React from "react";
import { screen, render } from "@testing-library/react";
import { ImageLoader } from "../components/ImageLoader/ImageLoader";

test("Image Loader Works", () => {
	render(<ImageLoader />);
	// screen.debug();
	const unsplashGallery = screen.queryByTestId("unsplash-gallery");
	const pexelsGallery = screen.queryByTestId("pexels-gallery");
	expect(unsplashGallery).toBeInTheDocument;
	expect(pexelsGallery).toBeInTheDocument;
});
