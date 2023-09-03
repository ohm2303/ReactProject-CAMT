import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useFetch from "../Hook/useFetch";

const style = {
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "14px",
  width: "100%",
};

const Search = ({ size, onSearchResults }) => {
  const inputStyle = { ...style, width: size };
  const [prefix, setPrefix] = useState("");
  const [debouncedPrefix, setDebouncedPrefix] = useState("");
  const Api_Novel = `/novels/search/${debouncedPrefix}`;
  const { data } = useFetch(Api_Novel);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedPrefix(prefix);
    }, 10); // Adjust the debounce time as needed

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [prefix]);

  useEffect(() => {
    if (Array.isArray(data)) {
      const searchResults = data.filter((item) =>
        item.name.toLowerCase().includes(debouncedPrefix.toLowerCase())
      );

      onSearchResults(searchResults);
    } else {
      onSearchResults([]);
    }
  }, [data]);

  const handlePrefixChange = (event) => {
    setPrefix(event.target.value);
  };

  

  return (
    <div>
      <input
        style={inputStyle}
        type="text"
        placeholder="Search......🔍︎"
        value={prefix}
        onChange={handlePrefixChange}
        className="search-component"
      />
    </div>
  );
};


Search.propTypes = {
  value: PropTypes.string,
  size: PropTypes.string,
};

export default Search;
