import React, { useState } from "react";
import PhotoSlide from "../Component/PhotoSlide";
import NovelMain from "../Component/NovelMain";
import OptionMain from "../Component/OptionMain";
import Navbar from "../Component/Navbar";
import useFetch from "../Hook/useFetch";
//create function Home
function Home() {
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  const handlePrefixChange = (dataArray) => {
        setSearchResults(dataArray);
  };

  const Api_Novel = "/novels";
  const { data } = useFetch(Api_Novel);

  console.log(data);
  return (
    <>
      <Navbar onPrefixChange={handlePrefixChange} />
      <PhotoSlide />
      <OptionMain />
      {data && data.length > 0 ? (
        <NovelMain data={searchResults.length > 0 ? searchResults : data} />
      ) : (
        <div className="load">Loading Novels....</div>
      )}
    </>
  );
}

//export
export default Home;
