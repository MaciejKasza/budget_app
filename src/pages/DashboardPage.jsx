import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import styled from "styled-components";
import { Widget } from "../components/widgets/Widget";
import MetricsWidget from "../components/widgets/MetricsWidget";
import { WIDGET_TYPE } from "../utils/enum";
import CategoriesWidget from "../components/widgets/CategoriesWidget";
import TransactionListWidget from "../components/widgets/TransactionListWidget";

function DashboardPage() {
  const { setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("dasboard");
  }, []);

  return (
    <StyledPageContent>
      <StyledRow>
        <MetricsWidget
          type={WIDGET_TYPE.METRICS.BALANCE}
          data={{ value: 15000 }}
        />
        <MetricsWidget
          type={WIDGET_TYPE.METRICS.INCOME}
          data={{ value: 20000 }}
        />
        <MetricsWidget
          type={WIDGET_TYPE.METRICS.OUTCOME}
          data={{ value: 5000 }}
        />
        <MetricsWidget
          type={WIDGET_TYPE.METRICS.TRANSACTION}
          data={{ value: 5 }}
        />
      </StyledRow>
      <StyledRow>
        <Widget>
          <h2>DashboardPage</h2>
          <p>
            Main content goes here. Add more content to make it scrollable...
          </p>
          {/* Możesz dodać więcej treści, aby zobaczyć działanie przewijania */}
        </Widget>
        <CategoriesWidget width={"40%"} />
      </StyledRow>
      <StyledRow>
        <TransactionListWidget></TransactionListWidget>
      </StyledRow>
    </StyledPageContent>
  );
}

export default DashboardPage;

const StyledPageContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledRow = styled.div`
  display: flex;
  flex: 1;
  gap: 16px;
`;
