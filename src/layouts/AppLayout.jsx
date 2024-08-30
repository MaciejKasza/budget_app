import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/navigation/Navigation";
import styled from "styled-components";
import { MOBILE_WIDTH } from "../utils/enum";

function AppLayout() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    console.log(width);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <StyledAppContainer>
      {width > MOBILE_WIDTH ? <Navigation /> : <h1>MOBILE</h1>}

      <StyledContentContainer>
        <Header />
        <StyledPageWrapper>
          <Outlet />
        </StyledPageWrapper>
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

const StyledPageWrapper = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.fontColors.primary};

  overflow-y: auto; /* Pozwala na przewijanie w pionie, jeśli treść jest zbyt długa */
`;
