import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ searchText, setSearchText, onSubmit }) => {
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search-form">
      <input className="search-form__input" type="text" onChange={handleChange} value={searchText} />
      <button className="search-form__button" type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
};

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
