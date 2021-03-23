import React from "react";

const SearchForm = ({searchHandler, onChangeHandler}) => {
  return (
    <form onSubmit={searchHandler}>
      <div className="mb-3">
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
        <div id="search-category-aria" className="form-text">
          Pick your category below
        </div>
      </div>
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
      <button type="submit" className="btn btn-primary">Submit Search</button>
    </form>
  );
};

export default SearchForm;
