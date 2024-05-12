import styled from "styled-components";

export const Select = ({ id, name, type, placeholder, value, onChange }) => {
  return (
    <StyledInputWrapper>
      <StyledSelect
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={""}
        required
      >
        <option value="" disabled>
          Select Option
        </option>
        <option value="salary">Salary</option>
        <option value="freelancing">Freelancing</option>
        <option value="investments">Investiments</option>
        <option value="stocks">Stocks</option>
        <option value="bitcoin">Bitcoin</option>
        <option value="bank">Bank Transfer</option>
        <option value="youtube">Youtube</option>
        <option value="other">Other</option>
      </StyledSelect>
      <StyledLabel htmlFor={id}>{placeholder}</StyledLabel>
    </StyledInputWrapper>
  );
};

const StyledInputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  height: 50%;
  padding: 0 8px 6px 0;

  transform: translateY(-115%);
  font-size: 12px;
  color: #777;
  transition: 300ms all;
`;

const StyledSelect = styled.select`
  outline: none;
  border: 2px solid var(--color-white);
  border-radius: 4px;
  width: 100%;

  font-size: 16px;
  padding: 4px 8px;
  color: var(--color-blue);
  text-transform: capitalize;

  resize: none;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  background-color: transparent;

  &::placeholder {
    color: rgba(34, 34, 96, 0.4);
  }

  option {
    background-color: #eceff9;
  }
`;
