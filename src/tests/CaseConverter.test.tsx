import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import { CaseConverter } from "../components/CaseConverter/CaseConverter";

test("", () => {
	render(<CaseConverter />);
	const GamingTag = screen.getByText(/Gaming/i);
	expect(GamingTag).toBeInTheDocument;
});
