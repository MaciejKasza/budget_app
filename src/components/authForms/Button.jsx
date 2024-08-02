import React from "react";
import styled from "styled-components";

const Button = ({ type, loading, text }) => {
  return (
    <StyledButton type={type} disabled={loading}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  padding: 10px;
  background: ${({ theme }) => theme.colors.purpure};
  color: ${({ theme }) => theme.fontColors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  cursor: pointer;
  transition: 0.2s background-color ease;
  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.fontColors.darkPurpure};
  }

  &:disabled {
    cursor: wait;
  }
`;
