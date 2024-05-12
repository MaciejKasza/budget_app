import styled from "styled-components";

export const Button = ({ children, onClick, color, bgColor }) => {
  return (
    <StyledButton
      onClick={onClick}
      style={{
        background: bgColor,
        color: color,
      }}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  outline: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: 175px;
  border-radius: 16px;
  border: 4px solid var(--color-white);

  &:hover {
    background-color: #409900 !important;
  }
`;
