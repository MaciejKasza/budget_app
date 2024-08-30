import React from "react";
import { Widget } from "./Widget";

import styled from "styled-components";
import TransactionList from "../TransactionList";

const TransactionListWidget = ({ type, data, width }) => {
  return (
    <Widget width={width}>
      <StyledWidgetContent>
        <StyledWidgetHeader>
          <h2>Transactions list</h2>
        </StyledWidgetHeader>
        <StyledListWrapper>
          <TransactionList />
        </StyledListWrapper>
      </StyledWidgetContent>
    </Widget>
  );
};

export default TransactionListWidget;

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

const StyledListWrapper = styled.div``;
