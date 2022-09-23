import React from "react";
import { useThemeContext } from "../contexts/ThemeContext";
import "../styles/ToggleTheme.css";

const ToggleTheme = () => {
  const { setUseDarkTheme } = useThemeContext();

  const handleClick = () => {
    setUseDarkTheme((prev) => !prev);
  };

  return (
    <div className="theme-button">
      <label htmlFor="toggle-switch" className="switch">
        <input type="checkbox" id="toggle-switch" onClick={handleClick} />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default ToggleTheme;
