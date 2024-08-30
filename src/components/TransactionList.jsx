import React from "react";

import styled from "styled-components";

const TransactionList = ({ type, data, width }) => {
  return (
    <StyledListContent>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Created on</th>
            <th>User</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>05-04-2023</td>
            <td>Robert</td>
            <td>Wypłata</td>
            <td>10000</td>
            <td>
              <span className="status income"></span> Income
            </td>
            <td>Work</td>
          </tr>
          <tr>
            <td>2</td>
            <td>04-04-2023</td>
            <td>Robert</td>
            <td>Zakupy Lidl</td>
            <td>176</td>
            <td>
              <span className="status outcome"></span> Outcome
            </td>
            <td>Food</td>
          </tr>
          <tr>
            <td>3</td>
            <td>03-04-2023</td>
            <td>Robert</td>
            <td>Rower</td>
            <td>2399</td>
            <td>
              <span className="status outcome"></span> Outcome
            </td>
            <td>Other</td>
          </tr>
        </tbody>
      </table>
    </StyledListContent>
  );
};

export default TransactionList;

const StyledListContent = styled.div`
  /*  */
  .recent-orders {
    width: 100%;
    max-width: 800px;
    margin: auto;
    border-radius: 10px;
    padding: 20px;
  }

  .recent-orders h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead th {
    text-align: center;
    padding: 10px;
  }

  tbody tr {
    text-align: center;
  }

  tbody td {
    padding: 10px;
  }

  .status {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
  }

  .status.outcome {
    background-color: ${({ theme }) => theme.colors.red};
  }

  .status.income {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;

const StyledWidgetHeader = styled.div``;

const StyledWidgetFooter = styled.div``;
