import React from 'react';
import PropTypes from 'prop-types';

const style = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '14px',
  width: '100%'
};

  
const Search = ({ size,value, onChange }) => {
  const inputStyle = { ...style, width: size };
  return (
    <input
      style={inputStyle}
      type="text"
      placeholder="Search..."
      value={value}
      onChange={onChange}
      className="search-component"
    />
  );
};

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string
};

export default Search;
