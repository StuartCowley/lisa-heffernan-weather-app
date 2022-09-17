import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

import "../styles/ForecastSummaries.css";

const ForecastSummaries = ({ forecasts, onForecastSelect, selectedDate }) => (
  <div className="forecast-summaries">
    {forecasts.map((forecast) => (
      <ForecastSummary
        key={forecast.date}
        date={forecast.date}
        description={forecast.description}
        icon={forecast.icon.toString()}
        onSelect={onForecastSelect}
        temperature={forecast.temperature}
        selectedDate={selectedDate}
      />
    ))}
  </div>
);

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.number,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    }),
  ).isRequired,
  onForecastSelect: PropTypes.func.isRequired,
  selectedDate: PropTypes.number.isRequired,
};

export default ForecastSummaries;
