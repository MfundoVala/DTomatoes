import { screen, waitFor } from "@testing-library/react";
import React from "react";
import App from "../../../App";
import {
  testData,
  renderWithProviders,
} from "../../../application/testUtils/testUtils";
import { Pagination } from "./Pagination";

test("Pagination renders search bar and pagination buttons", async () => {
  const { user } = renderWithProviders(<App />);

  await user.click(screen.getByTestId("Home_Button_Movies"));

  await waitFor(() => {
    expect(screen.queryByTestId("Search_Bar")).toBeInTheDocument();
  });

  expect(screen.queryByTestId("Pagination_Buttons")).toBeInTheDocument();
});

test("Pagination renders search bar and pagination buttons", async () => {
  const { user } = renderWithProviders(
    <Pagination allFilms={testData} title="Movies" />
  );

  await waitFor(() => {
    expect(screen.queryByTestId("Search_Bar")).toBeInTheDocument();
  });

  expect(screen.queryByTestId("Pagination_Buttons")).toBeInTheDocument();
});

test("Pagination renders 10 film cards only", async () => {
  const { user } = renderWithProviders(
    <Pagination allFilms={testData} title="Movies" />
  );

  await waitFor(() => {
    const cards = screen.queryAllByTestId(/Film_Card/);
    expect(cards).toHaveLength(10);
  });
});

test("Pagination renders next 10 film cards on click", async () => {
  const { user } = renderWithProviders(
    <Pagination allFilms={testData} title="Movies" />
  );

  await waitFor(() => {
    const button = screen.getByTestId("Pagination_Button_2");
    user.click(button);
  });

  await waitFor(() => {
    const card20 = screen.getByTestId("Film_Card 20");
    expect(card20).toBeTruthy();
  });
});

test("Film card shows more text on click", async () => {
  const { user } = renderWithProviders(
    <Pagination allFilms={testData} title="Movies" />
  );

  await waitFor(() => {
    const button = screen.getByTestId("Pagination_Button_2");
    user.click(button);
  });

  await waitFor(() => {
    const card20 = screen.getByTestId("Film_Card 20");
    expect(card20).toBeTruthy();
  });
});
