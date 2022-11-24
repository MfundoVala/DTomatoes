import { screen, waitFor } from "@testing-library/react";
import { Footer } from "./Footer";
import React from "react";
import App from "../../../App";
import {
  renderWithRouter,
  renderWithProviders,
} from "../../../application/testUtils/testUtils";

test("Footer renders Appstore button ", () => {
  renderWithRouter(<Footer />);
  const codeMessage = screen.getByPlaceholderText("#/appstoreImage");
  expect(codeMessage).toBeTruthy();
});

test("Footer renders Playstore button ", () => {
  renderWithRouter(<Footer />);
  const codeMessage = screen.getByPlaceholderText("#/playstoreImage");
  expect(codeMessage).toBeTruthy();
});

test("Footer renders copyright text ", () => {
  renderWithRouter(<Footer />);
  const codeMessage = screen.findByText(
    "© Copyright 2022 Dreadful Tomatoes. All rights reserved."
  );
  expect(codeMessage).toBeTruthy();
});

test("Footer renders footer logo", () => {
  renderWithRouter(<Footer />);
  const codeMessage = screen.getByPlaceholderText("Footer logo");
  expect(codeMessage).toBeTruthy();
});

test("Footer  renders home buttons", () => {
  renderWithProviders(<Footer />);
  const homeButton = screen.getByTestId("Home_Buttons_Container");
  expect(homeButton).toBeTruthy();
});

test("Footer HomeButton nav works and only renders buttons on Splash page", async () => {
  const { user } = renderWithProviders(<App />);

  expect(screen.queryByTestId("Home_Buttons_Container")).toBeInTheDocument();

  await user.click(screen.getByTestId("Home_Button_Movies"));

  await waitFor(() => {
    expect(
      screen.queryByTestId("Home_Buttons_Container")
    ).not.toBeInTheDocument();
  });
});
