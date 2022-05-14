import { screen, render } from "@testing-library/react";
import { CaseConverter } from "../components/CaseConverter/CaseConverter";

test("Case Converter", () => {
	render(<CaseConverter />);
	const titleInput = screen.getAllByTestId("titleinput");
	const titleOutput = screen.getAllByTestId("titleoutput");
	expect(titleInput).toBeInTheDocument;
	expect(titleOutput).toBeInTheDocument;
});
