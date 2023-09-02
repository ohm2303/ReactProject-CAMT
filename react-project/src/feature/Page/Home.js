import React, { useContext, useState } from "react";
import PhotoSlide from "../Component/PhotoSlide";
import NovelMain from "../Component/NovelMain";
import OptionMain from "../Component/OptionMain";
import Navbar from "../Component/Navbar";
import useFetch from "../Hook/useFetch";
import { userContext } from "../../Testapp";

function Home({handlePrefixChange,data,searchResults}) {
    const [login, setLogin] = useState();
    const user = useContext(userContext);

  return (
    <>
    {login}
      <Navbar setLogin={setLogin} onSearchResults={handlePrefixChange} /> {/* Make sure to pass both props */}
      <PhotoSlide />

      <OptionMain />
      {data && data.length > 0 ? (
        <NovelMain data={searchResults.length > 0 ? searchResults : data} />
      ) : (
        <>
        <div className="load">Loading Novels....</div>
        <h1>{user.username}</h1>
        </>
      )}
     
    </>
  );
}

export default Home;
