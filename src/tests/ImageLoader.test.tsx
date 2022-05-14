import React from "react";
import { screen, render } from "@testing-library/react";
import { ImageLoader } from "../components/ImageLoader/ImageLoader";

test("Image Loaders", () => {
	render(<ImageLoader />);
	const unsplashGallery = screen.queryByTestId("unsplash-gallery");
	const pexelsGallery = screen.queryByTestId("pexels-gallery");
	expect(unsplashGallery).toBeInTheDocument;
	expect(pexelsGallery).toBeInTheDocument;
});

test("Image Search Boxes", () => {
	render(<ImageLoader />);
	const searchBoxU = screen.queryByTestId("searchboxu");
	const searchBoxP = screen.queryByTestId("searchboxp");
	expect(searchBoxU).toBeInTheDocument;
	expect(searchBoxP).toBeInTheDocument;
});

test("Image Paginations", () => {
	render(<ImageLoader />);
	const paginationU = screen.queryByTestId("paginationu");
	const paginationP = screen.queryByTestId("paginationp");
	expect(paginationU).toBeInTheDocument;
	expect(paginationP).toBeInTheDocument;
});
