import React, { useState } from "react";
import Text from "./SubComponent/Text";
import NovelProduct from "./Novel_Product";
import novelData from "../asset/novelData";
import "./style/NovelMain.css"

//create function Novel Main
function NovelMain() {
  const [novels, Setnovel] = useState(novelData);
  return (
    <div className="novel_main">
      <Text size={25} family={'Times New Roman'}>ขายดี</Text>
      {novels.length > 0 ? (
        <ul className="Novel__Product">
          {novels.map((novel) => (
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
