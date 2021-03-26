import React from "react";

const SearchForm = ({ searchHandler, onChangeHandler, resetHandler }) => {
  return (
    <form onSubmit={searchHandler} style={{ width: "60%", margin: "0 auto" }}>
      <div className="form-group">
        <label for="search-term" className="form-label">
          Search term
        </label>
        <input
          type="text"
          className="form-control"
          id="search-term"
          aria-describedby="search-category-aria"
          name="searchTerm"
          onChange={onChangeHandler}
        />
        <div id="search-category-aria" className="form-text text-center">
          Pick your category below
        </div>
      </div>
      <div className="form-group text-center">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="category"
            id="name"
            value="name"
            onChange={onChangeHandler}
          />
          <label className="form-check-label" for="name">
            Name
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="category"
            id="city"
            value="city"
            onChange={onChangeHandler}
          />
          <label className="form-check-label" for="city">
            City
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="category"
            id="country"
            value="country"
            onChange={onChangeHandler}
          />
          <label className="form-check-label" for="country">
            Country
          </label>
        </div>
      </div>
      <div className="form-group text-center">
        <button type="submit" className="btn btn-primary">
          Submit Search
        </button>
        <button type="btn" className="btn btn-warning" onClick={resetHandler}>
          Submit Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
