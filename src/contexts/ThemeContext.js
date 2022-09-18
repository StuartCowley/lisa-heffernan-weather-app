import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeContext.Provider value={{ useDarkTheme, setUseDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
