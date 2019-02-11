import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        type="text"
        name="query"
        className="form-control mr-sm-2"
        placeholder="Search here"
        id="i-form"
        aria-label="Search"
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      />
    </form>
  );
};

export default SearchBox;
