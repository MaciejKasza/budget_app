import React from "react";
import styled from "styled-components";

export const Widget = ({ children, width }) => {
  console.log(width);

  return <StyledWidgetWrapper width={width}>{children}</StyledWidgetWrapper>;
};

const StyledWidgetWrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgUnit1};
  color: ${({ theme }) => theme.fontColors.primary};
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

  flex-basis: ${({ width }) => (width ? width : "100%")};

  padding: 24px;
`;
