import styled from "styled-components";
import { CreateBudgetForm } from "./CreateBudgetForm";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export const CreateBudget = ({ budgets }) => {
  const [isExpand, setIsExpand] = useState(false);

  const handleExpandClick = () => {
    setIsExpand(true);
  };
  return (
    <StyledCreateBudget
      isExpand={isExpand}
      className={isExpand ? "expand" : ""}
    >
      <StyledHeader>
        Create {budgets ? <span>budget</span> : <span>your first budget</span>}
      </StyledHeader>
      {isExpand ? (
        <CreateBudgetForm />
      ) : (
        <ButtonContainer onClick={handleExpandClick}>
          <FaPlus />
        </ButtonContainer>
      )}
    </StyledCreateBudget>
  );
};

const StyledCreateBudget = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  position: relative;
  padding: 40px;
  border-radius: 25px;
  max-width: 800px;

  box-shadow: 0.25em 0.3em 1em #83959533;
  border-top: 0.15em solid white;
  border-left: 0.15em solid white;
  border-right: 0.15em solid #f7fcfd;
  border-bottom: 0.15em solid #f7fcfd;

  transition: flex-grow 0.5s ease-in-out;

  &::before {
    content: " ";
    position: absolute;
    inset: 0.55rem;
    border: 2px dashed #111c1d;
    border-radius: 15px;
    z-index: -1;
  }

  &.expand {
    flex-grow: 1;
  }
`;

const StyledHeader = styled.h2``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  cursor: pointer;

  svg {
    font-size: 112px;
  }
`;
