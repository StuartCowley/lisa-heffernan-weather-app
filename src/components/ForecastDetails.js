import React from "react";
import PropTypes from "prop-types";
import {
  BsArrowUpCircle,
  BsArrowUpRightCircle,
  BsArrowRightCircle,
  BsArrowDownRightCircle,
  BsArrowDownCircle,
  BsArrowDownLeftCircle,
  BsArrowLeftCircle,
  BsArrowUpLeftCircle,
} from 'react-icons/bs';
import "../styles/ForecastDetails.css";
import { useThemeContext } from "../contexts/ThemeContext";

const ForecastDetails = ({ forecast }) => {
  const {
    date, temperature, humidity, wind,
  } = forecast;
  const { useDarkTheme } = useThemeContext();
  const formattedDate = new Date(date).toDateString();
  const getWindDirection = (windDirection) => {
    if (windDirection === 's' || windDirection === 'sse') {
      return <BsArrowUpCircle />;
    }
    if (windDirection === 'sw' || windDirection === 'ssw') {
      return <BsArrowUpRightCircle />;
    }
    if (windDirection === 'w' || windDirection === 'wsw') {
      return <BsArrowRightCircle />;
    }
    if (windDirection === 'nw' || windDirection === 'wnw') {
      return <BsArrowDownRightCircle />;
    }
    if (windDirection === 'n' || windDirection === 'nnw') {
      return <BsArrowDownCircle />;
    }
    if (windDirection === 'ne' || windDirection === 'nne') {
      return <BsArrowDownLeftCircle />;
    }
    if (windDirection === 'e' || windDirection === 'ene') {
      return <BsArrowLeftCircle />;
    }
    if (windDirection === 'se' || windDirection === 'ese') {
      return <BsArrowUpLeftCircle />;
    }
  };

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
      <div className="forecast-details__wind" data-testid="wind-icon">
        Wind:
        &nbsp;
        {wind.speed}
        mph
        &nbsp;
        {getWindDirection(wind.direction)}
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
