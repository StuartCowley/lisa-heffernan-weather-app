import React from "react";
import { useThemeContext } from "../contexts/ThemeContext";

const ToggleTheme = () => {
  const { setUseDarkTheme } = useThemeContext();

  const handleClick = () => {
    setUseDarkTheme((prev) => !prev);
  };

  return (
    <button type="submit" onClick={handleClick}>toggle theme</button>
  );
};

export default ToggleTheme;
