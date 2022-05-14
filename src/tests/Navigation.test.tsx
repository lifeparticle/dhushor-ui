import { screen, render, act, waitFor } from "@testing-library/react";
import { AppNavigation } from "../components/Navigation/Navigation";
import { MemoryRouter } from "react-router-dom";

test("Navigation Button Works", async () => {
	act(() => {
		render(
			<MemoryRouter>
				<AppNavigation />
			</MemoryRouter>
		);
	});
	const homeNav = screen.getByRole("link", { name: /home/i });
	const aboutNav = screen.getByRole("link", { name: /about/i });

	await waitFor(() => {
		expect(homeNav).toBeInTheDocument;
		expect(aboutNav).toBeInTheDocument;
	});
});
