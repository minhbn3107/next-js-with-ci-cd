/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", async () => {
    // Create a resolved promise for the params
    const paramsPromise = Promise.resolve({ slug: "Test" });

    // Render the component with the promise
    render(await Page({ params: paramsPromise }));

    expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it("A message for new test", async () => {
    // Create a resolved promise for the params
    const paramsPromise = Promise.resolve({ slug: "Test" });

    // Render the component with the promise
    render(await Page({ params: paramsPromise }));

    expect(
        screen.getByText("Write github actions for ci/cd")
    ).toBeInTheDocument();
});
