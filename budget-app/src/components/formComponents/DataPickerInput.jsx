import styled from "styled-components";
import DatePicker from "react-datepicker";

export const DataPickerInput = ({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <StyledInputWrapper>
      <StyledDatePicker
        id={id}
        name={name}
        selected={value}
        dateFormat={"dd/MM/yyyy"}
        onChange={onChange}
      />
      <StyledLabel htmlFor={id}>{placeholder}</StyledLabel>
    </StyledInputWrapper>
  );
};

const StyledInputWrapper = styled.div`
  width: 100%;
  position: relative;
  & .react-datepicker-wrapper {
    width: 100%;
  }
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

const StyledDatePicker = styled(DatePicker)`
  width: 100%;

  border: 2px solid var(--color-white);
  border-radius: 4px;
  font-size: 16px;
  padding: 6px 8px;
  color: var(--color-blue);
  text-transform: capitalize;

  resize: none;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
`;
