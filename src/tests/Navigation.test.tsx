import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import { AppNavigation } from "../components/Navigation/Navigation";
import { act } from "react-dom/test-utils";

test("Navigation Button Works", () => {
	// screen.debug();
	act(() => {
		render(<AppNavigation />);
	});
	const homeNav = screen.queryByTestId("homeNav");
	const aboutNav = screen.queryByTestId("aboutNav");

	expect(homeNav).toBeInTheDocument;
	expect(aboutNav).toBeInTheDocument;
});
