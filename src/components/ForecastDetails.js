import React from "react";
import PropTypes from "prop-types";

import "../styles/ForecastDetails.css";
import { useThemeContext } from "../contexts/ThemeContext";

const ForecastDetails = ({ forecast }) => {
  const {
    date, temperature, humidity, wind,
  } = forecast;
  const { useDarkTheme } = useThemeContext();
  const formattedDate = new Date(date).toDateString();
  return (
    <div className={`forecast-details ${useDarkTheme ? "dark" : "light"}`}>
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__max-temperature">
        Max Temperature:
        &nbsp;
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__min-temperature">
        Min Temperature:
        &nbsp;
        {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details__humidity">
        Humidity:
        &nbsp;
        {humidity}
        %
      </div>
      <div className="forecast-details__wind">
        Wind:
        &nbsp;
        {wind.speed}
        mph
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }).isRequired,
};

export default ForecastDetails;
