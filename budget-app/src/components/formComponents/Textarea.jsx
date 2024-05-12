import styled from "styled-components";

export const Textarea = ({
  id,
  name,
  type,
  placeholder,
  value,
  row,
  onChange,
}) => {
  return (
    <StyledInputWrapper>
      <StyledTextArea
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        rows={row}
        required
      />
      <StyledLabel htmlFor={id}>{placeholder}</StyledLabel>
    </StyledInputWrapper>
  );
};

const StyledInputWrapper = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  height: 50%;
  padding: 0 8px 6px 0;

  transform: translateY(-28%);
  font-size: 12px;
  color: #777;
  transition: 300ms all;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 120px;

  border: 2px solid var(--color-white);
  border-radius: 4px;
  font-size: 16px;
  padding: 6px 8px;
  color: var(--color-blue);
  text-transform: capitalize;

  resize: none;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  background-color: transparent;
  &:active {
    outline: none;
    border: 2px solid var(--color-white);
  }
`;
