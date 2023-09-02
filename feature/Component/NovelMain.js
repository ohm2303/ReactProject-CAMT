import React, { useState } from "react";
import Text from "../SubComponent/Text";
import NovelProduct from "../../feature/Novel_Product";
import novelData from "../../asset/novelData";
import "../style/NovelMain.css";
import { styled } from "styled-components";
import {Link} from "react-router-dom";
//create function Novel Main
function NovelMain({ data, className }) {
  return (
    <div className={className}>
      <div className="novel_main">
        <Text size={25} family={"Times New Roman"}>
          ขายด
        </Text>

        <ul className="Novel__Product">
          {data.map((novel) => (
            <li key={novel.id}>
              <Link to = {`/novel/${novel.id}`}>
                <NovelProduct item={novel}></NovelProduct>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default styled(NovelMain)`
  .novel_main{
    border: 1px solid green;
  }
  .Novel__Product {
    display: flex;
    flex-wrap: wrap;

    list-style-type: none;
    padding: 0;
    margin: 0 auto;
    border: 1px solid red;
    text-align: center;
    padding-left: 2rem;
  }
  li {
    display: flex;
    flex-wrap: wrap;
  }
  a{
    text-decoration: none;
    color: #ffffff;
  }
`;
