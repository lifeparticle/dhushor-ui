import { screen, render } from "@testing-library/react";
import { CaseConverter } from "../components/CaseConverter/CaseConverter";

test("Case Converter", () => {
	render(<CaseConverter />);
	const titleInput = screen.getAllByTestId("titleinput");
	const titleOutput = screen.getAllByTestId("titleoutput");
	const topicSearchInput = screen.getAllByTestId("topicSearch");
	const tags = screen.getAllByTestId("tags");
	expect(titleInput).toBeInTheDocument;
	expect(titleOutput).toBeInTheDocument;
	expect(topicSearchInput).toBeInTheDocument;
	expect(tags).toBeInTheDocument;
});
