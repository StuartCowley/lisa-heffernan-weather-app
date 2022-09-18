import React from "react";
import { useThemeContext } from "../contexts/ThemeContext";
import "../styles/ToggleTheme.css";

const ToggleTheme = () => {
  const { useDarkTheme, setUseDarkTheme } = useThemeContext();

  const handleClick = () => {
    setUseDarkTheme((prev) => !prev);
  };

  return (
    <div className="theme-button">
      <button className={`theme-button__button ${useDarkTheme ? "dark" : "light"}`} type="submit" onClick={handleClick}>toggle theme</button>
    </div>
  );
};

export default ToggleTheme;
