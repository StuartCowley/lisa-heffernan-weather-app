import React from "react";
import { render } from "@testing-library/react";
import App from "../../components/App";
import { ThemeContextProvider } from "../../contexts/ThemeContext";

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
