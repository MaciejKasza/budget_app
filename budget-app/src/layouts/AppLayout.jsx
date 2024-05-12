import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";

export const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Navbar />
      <StyledDasboardWrapper>
        <Outlet />
      </StyledDasboardWrapper>
    </StyledAppLayout>
  );
};

const StyledAppLayout = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 24px;
  gap: 24px;
`;

const StyledDasboardWrapper = styled.div`
  padding: 24px;
  flex-grow: 1;
  background-color: var(--color-gray);
  border-radius: 16px;
  border: 4px solid var(--color-white);
`;
