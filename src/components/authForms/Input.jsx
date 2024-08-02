import React from "react";
import styled from "styled-components";

const Input = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  error,
  disabled,
}) => {
  return (
    <StyledInputContainer>
      <StyledInput
        type={type}
        value={value}
        name={name}
        className={(value ? "valid" : "") + " " + (error ? "error" : "")}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {label && <StyledLabel>{label}</StyledLabel>}
      {error && <StyledError>{error}</StyledError>}
    </StyledInputContainer>
  );
};

export default Input;

const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 75px;
  & input:focus ~ i,
  & input.valid ~ i {
    transform: translateY(-7.5px);
    font-size: 0.8em;
    color: ${({ theme }) => theme.fontColors.secondary};
  }
`;

const StyledInput = styled.input`
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgUnit1};
  border: 2px solid ${({ theme }) => theme.colors.bgUnit2};
  outline: none;
  padding: 25px 10px 7.5px;
  border-radius: 4px;
  color: ${({ theme }) => theme.fontColors.primary};

  &.error {
    border-color: ${({ theme }) => theme.fontColors.error};
  }

  &:disabled {
    cursor: wait;
  }
`;

const StyledLabel = styled.i`
  position: absolute;
  left: 0;
  padding: 15px 10px;
  font-style: normal;
  color: #aaa;
  transition: 0.5s;
  pointer-events: none;
`;

const StyledError = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.fontColors.error};
`;
