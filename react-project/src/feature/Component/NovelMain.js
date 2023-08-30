import React, { useState } from "react";
import Text from "../SubComponent/Text";
import NovelProduct from "../../feature/Novel_Product";
import novelData from "../../asset/novelData";
import "../style/NovelMain.css";

import useFetch from "../Hook/useFetch";

//create function Novel Main
function NovelMain() {
 const Api_Novel = "/novels";
 const {data} = useFetch(Api_Novel);
  return (
    <div className="novel_main">
      <Text size={25} family={'Times New Roman'}>ขายดี</Text>
      {data.length > 0 ? (
        <ul className="Novel__Product">
          {data.map((novel) => (
            <NovelProduct key={novel.id} item={novel}></NovelProduct>
          ))}
        </ul>
      ) : (
        <div className="load">Loading Novels....</div>
      )}
    </div>
  );
}

//export
export default NovelMain;
