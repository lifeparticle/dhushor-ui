import { screen, render } from "@testing-library/react";
import { AppLinks } from "../components/Links/Links";

test("Gist Github Button Loads Correctly", () => {
	render(<AppLinks />);
	const gistGithubBt = screen.getByText(/gist github/i);
	expect(gistGithubBt).toBeInTheDocument;
});

test("ProWriting Button Works Correctly", () => {
	render(<AppLinks />);
	const ProWritingAidBtn = screen.getByText(/prowritingaid/i);
	expect(ProWritingAidBtn).toBeInTheDocument;
});

test("Grammarly Button Works Correctly", () => {
	render(<AppLinks />);
	const grammarlyBtn = screen.getByText(/grammarly/i);
	expect(grammarlyBtn).toBeInTheDocument;
});

test("HemingWay Editor Button Works Correctly", () => {
	render(<AppLinks />);
	const heminwayBtn = screen.getByText(/hemingway editor/i);
	expect(heminwayBtn).toBeInTheDocument;
});

test("Carbon Now Button Works Correctly", () => {
	render(<AppLinks />);
	const carbonNowBtn = screen.getByText(/carbon now sh/i);
	expect(carbonNowBtn).toBeInTheDocument;
});
