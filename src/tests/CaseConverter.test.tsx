import { screen, render } from "@testing-library/react";
import { CaseConverter } from "../components/CaseConverter/CaseConverter";
import { tagArray } from "../utils/utils";
test("Case Converter", () => {
	render(<CaseConverter />);
	const titleInput = screen.getAllByTestId("titleinput");
	const titleOutput = screen.getAllByTestId("titleoutput");
	const topicSearchInput = screen.getAllByTestId("topicSearch");

	expect(titleInput).toBeInTheDocument;
	expect(titleOutput).toBeInTheDocument;
	expect(topicSearchInput).toBeInTheDocument;

	const tags = tagArray();
	tags.forEach((tag: object) => {
		const [key, value] = Object.entries(tag)[0];
		const tagSearch = screen.getByText(value);
		expect(tagSearch).toBeInTheDocument;
	});
});
