import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuthContext } from "../hooks/useAuthContext";
import { useBudgetContext } from "../hooks/useBudgetContext";
import { CreateBudget } from "../components/CreateBudget";
import { useBudgetList } from "../hooks/budget/useBudgetList";

export const MainDasboardLayout = () => {
  const { user } = useAuthContext();
  const { budgetList } = useBudgetContext();
  const { getList, isLoading, error } = useBudgetList();

  useEffect(() => {
    getList();
  }, [budgetList]);

  return (
    <StyledMainDasboardLayout>
      <StyledHeader>
        Welcome <span>{user.name}</span>, now you can manage your budget!
      </StyledHeader>
      {!budgetList && (
        <StyledSubHeader>
          <p>Personal budgeting is the secret to financial freedom.</p>
          <p>Create a budget to get started!</p>
        </StyledSubHeader>
      )}
      <StyledContainer>
        {budgetList.map((item, key) => (
          <div key={key}>{item.name}</div>
        ))}
        <CreateBudget budgets={budgetList} />
      </StyledContainer>
    </StyledMainDasboardLayout>
  );
};

const StyledMainDasboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1500px;
  margin-inline: auto;
  padding: 24px;
  width: 100%;
  font-size: 28px;
`;

const StyledHeader = styled.h1`
  span {
    color: #fe7f00;
  }
`;

const StyledSubHeader = styled.div`
  p {
    padding: 6px 0;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
`;
