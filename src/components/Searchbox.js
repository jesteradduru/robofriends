import React from "react";

const SearchBox = ({ searchChange, searchValue }) => {
  return (
    <div className="form-group border border-primary rounded mx w-100 mt-3">
      <input
        type="text"
        placeholder="search robots"
        className="form-control "
        onChange={searchChange}
        value={searchValue}
      />
    </div>
  );
};

export default SearchBox;
