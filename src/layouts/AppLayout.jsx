import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/navigation/Navigation";
import styled from "styled-components";

function AppLayout() {
  return (
    <StyledAppContainer>
      <Navigation />
      <StyledContentContainer>
        <Header />
        <Outlet />
      </StyledContentContainer>
    </StyledAppContainer>
  );
}

export default AppLayout;

const StyledAppContainer = styled.div`
  display: flex;
  height: 100vh;
  /* gap: 32px; */
`;

const StyledContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  gap: 32px;
`;
