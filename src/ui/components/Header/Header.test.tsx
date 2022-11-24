import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import React from "react";
import App from "../../../App";
import {
  renderWithRouter,
  renderWithProviders,
} from "../../../application/testUtils/testUtils";

test("Header renders movies IconLink", () => {
  renderWithRouter(<Header />);
  const codeMessage = screen.getByTestId("Header_Movies_Link");
  expect(codeMessage).toBeTruthy();
});

test("Header renders series IconLink", () => {
  renderWithRouter(<Header />);
  const codeMessage = screen.getByTestId("Header_Series_Link");
  expect(codeMessage).toBeTruthy();
});

test("Header Movies IconLink works", async () => {
  const { user } = renderWithProviders(<App />);
  await user.click(screen.getByTestId("Header_Movies_Link"));
  expect(screen.getByText("Popular Movies")).toBeInTheDocument();
});

test("Header Series IconLink works", async () => {
  const { user } = renderWithProviders(<App />);
  await user.click(screen.getByTestId("Header_Series_Link"));
  expect(screen.getByText("Popular Series")).toBeInTheDocument();
});

test("Home logo IconLink works", async () => {
  const { user } = renderWithProviders(<App />);
  await user.click(screen.getByTestId("Header_Series_Link"));
  await user.click(screen.getByTestId("Header_Logo_Link"));
  expect(screen.getByAltText("gotImage")).toBeInTheDocument();
});
