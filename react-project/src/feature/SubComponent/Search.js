import React, { useState } from "react";
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
  const Api_Novel = `/novels/search/${prefix}`;
  const { data } = useFetch(Api_Novel);

  const dataPrefix = JSON.stringify(data);
  const dataArray = JSON.parse(dataPrefix);

  const handlePrefixChange = (event) => {
    setPrefix(event.target.value);
  
    if (Array.isArray(dataArray)) {
      const searchResults = dataArray.filter((item) =>
        item.name.toLowerCase().includes(prefix.toLowerCase())
      );
      
      onSearchResults(searchResults);
    } else {
      // Handle the case when dataArray is not an array (e.g., null or non-array object)
      onSearchResults([]); // Clear the search results
    }
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

      {dataArray[0] && dataArray[0].name && (
        <div className="suggestions">
          {dataArray.map((item, index) => (
            <div key={index} className="suggestion">
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export function prefix(){
  
}

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string,
};

export default Search;
