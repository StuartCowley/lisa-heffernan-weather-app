import React, { useEffect, useState } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";
import ToggleTheme from "./ToggleTheme";
import getForecast from "../requests/getForecast";
import { ThemeContextProvider } from "../contexts/ThemeContext";
import "../styles/App.css";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate,
  );

  useEffect(() => {
    getForecast("", setSelectedDate, setForecasts, setLocation, setErrorMessage);
  }, []);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTextSearch = () => {
    getForecast(
      searchText,
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage,
    );
  };

  return (
    <ThemeContextProvider>
      <div className="weather-app">
        <LocationDetails
          city={location.city}
          country={location.country}
          errorMessage={errorMessage}
        />
        <SearchForm
          searchText={searchText}
          setSearchText={setSearchText}
          onSubmit={handleTextSearch}
        />
        {!errorMessage && (
          <>
            <ForecastSummaries
              forecasts={forecasts}
              onForecastSelect={handleForecastSelect}
              selectedDate={selectedDate}
            />
            {selectedForecast && (
              <ForecastDetails forecast={selectedForecast} />
            )}
          </>
        )}
        <ToggleTheme />
      </div>
    </ThemeContextProvider>
  );
};

export default App;
