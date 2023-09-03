import React, { useState } from "react";
import Text from "../SubComponent/Text";
import NovelProduct from "../../feature/Novel_Product";
import novelData from "../../asset/novelData";
import "../style/NovelMain.css";
import { styled } from "styled-components";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
//create function Novel Main
function NovelMain({ data, className }) {
  return (
    <div className={className}>
      <div className="novel_main">
        <Text size={25} family={"Times New Roman"}>
          ขายดี
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

NovelMain.propType = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(NovelMain)`
  .novel_main{

  }
  .Novel__Product {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    padding: 0px;
    width: 100%;
    border: none;
    justify-content: center;
    background-color:#e1e7e0;
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
