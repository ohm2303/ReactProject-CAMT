import React, { useState } from "react";
import Text from "../SubComponent/Text";
import NovelProduct from "../../feature/Novel_Product";
import novelData from "../../asset/novelData";
import "../style/NovelMain.css";

//create function Novel Main
function NovelMain({ data }) {
  return (
    <div className="novel_main">
      <Text size={25} family={"Times New Roman"}>
        ขายดี
      </Text>

      <ul className="Novel__Product">
        <li>
          {data.map((novel) => (
            <NovelProduct key={novel.id} item={novel}></NovelProduct>
          ))}
        </li>
      </ul>
    </div>
  );
}

//export
export default NovelMain;
