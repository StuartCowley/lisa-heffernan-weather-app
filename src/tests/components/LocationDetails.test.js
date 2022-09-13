import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  it("renders the correct city and location props", () => {
    //render() returns an object and we have destructured it and pulled
    // getByText method from it. This will render the component with the
    //stubbed props we have passed in.
    const { getByText } = render(
        <LocationDetails city="Manchester" country="UK" />
    );

    expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement);
  });
});
