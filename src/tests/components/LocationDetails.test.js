import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";
import { ThemeContextProvider } from "../../contexts/ThemeContext";

describe("LocationDetails", () => {
  it("renders the correct city and location props", () => {
    const { getByText } = render(
      <ThemeContextProvider>
        <LocationDetails city="Manchester" country="UK" />
      </ThemeContextProvider>,
    );

    expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement);
  });
});
