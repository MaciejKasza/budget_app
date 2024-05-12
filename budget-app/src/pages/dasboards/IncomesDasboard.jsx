import styled from "styled-components";
import { TransactionForm } from "../../components/TransactionForm";

export const IncomesDasboard = () => {
  return (
    <StyledDasboard>
      <h1>IncomesDasboard</h1>
      <StyledSummary className="summary">
        Total Income:
        <span>
          12500<span>PLN</span>
        </span>
      </StyledSummary>
      <StyledContainer>
        <StyledTransactionForm>
          <TransactionForm type={"income"} />
        </StyledTransactionForm>
        <StyledTransactionList>
          <div className="listElem"></div>
        </StyledTransactionList>
      </StyledContainer>
    </StyledDasboard>
  );
};

const StyledDasboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledSummary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px;
  gap: 6px;

  font-size: 28px;
  font-weight: 700;
  color: var(--color-blue);

  background-color: var(--color-gray);
  border-radius: 16px;
  border: 4px solid var(--color-white);

  span {
    color: var(--color-green);
  }
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  flex-grow: 1;

  div {
  }
`;

const StyledTransactionForm = styled.div`
  width: 35%;
`;

const StyledTransactionList = styled.div`
  flex-grow: 1;
`;
