import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";
import { ThemeContextProvider } from "../../contexts/ThemeContext";

describe("SearchForm", () => {
  const validProps = {
    searchText: "manchester",
    setSearchText: () => {},
    onSubmit: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ThemeContextProvider>
        <SearchForm
          searchText={validProps.searchText}
          setSearchText={validProps.setSearchText}
          onSubmit={validProps.onSubmit}
        />
      </ThemeContextProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct text", () => {
    const { getByText } = render(
      <ThemeContextProvider>
        <SearchForm
          searchText={validProps.searchText}
          setSearchText={validProps.setSearchText}
          onSubmit={validProps.onSubmit}
        />
      </ThemeContextProvider>,
    );

    expect(getByText("Search")).toHaveClass("search-form__button");
  });
});
