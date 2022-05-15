import React from 'react';

const SearchBox = (props) => {
  const { onSearchTerm } = props;
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={onSearchTerm}
      />
    </div>
  );
};

export default SearchBox;
