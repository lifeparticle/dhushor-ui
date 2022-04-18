import { screen, render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import { ImageLoader } from "../components/ImageLoader/ImageLoader";
import { AppLinks } from "../components/Links/Links";
import { LINKS } from "../constants/constants";
import Home from "../pages/Home";

test("image loads correctly", () => {
  render(<AppLinks />);
  const githubBt = screen.getByText(/gist github/i);
  expect(githubBt).toBeInTheDocument;
});
