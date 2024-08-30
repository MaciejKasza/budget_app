import React from "react";
import { Widget } from "./Widget";
import { Link } from "react-router-dom";

import styled from "styled-components";

const CategoriesWidget = ({ type, data, width }) => {
  return (
    <Widget width={width}>
      <StyledWidgetContent>
        <StyledWidgetHeader>
          <h2>Categories</h2>
        </StyledWidgetHeader>
        <div className="cetegoryList">
          <div className="categoryListItem">
            <div className="icon">i</div>
            <div className="title">Home</div>
            <div className="color">
              <span></span>
            </div>
          </div>
        </div>
      </StyledWidgetContent>
    </Widget>
  );
};

export default CategoriesWidget;

const StyledWidgetContent = styled.div`
  div.categoryListItem {
    display: flex;

    div.color,
    div.icon {
      width: 10%;
    }

    div.title {
      flex-grow: 1;
    }

    div.color {
      span {
        display: block;
        width: 15px;
        height: 15px;
        background-color: red;
      }
    }
  }
`;

const StyledWidgetHeader = styled.div``;

const StyledWidgetFooter = styled.div``;
