import styled from "styled-components";

export const FormInput = ({ label, value, onChange, name }) => {
  return (
    <StyledInput>
      <label htmlFor="">{label}</label>
      <input value={value} name={name} onChange={onChange} type="text" />
    </StyledInput>
  );
};

const StyledInput = styled.div`
  display: grid;
  gap: 8px;
  width: 100%;

  label {
    font-weight: 700;
    font-size: 16px;
  }
  input {
    width: 100%;
    font-size: 16px;
    background-color: #f7fcfd;
    border: 2px solid #839595;
    border-radius: 4px;
    padding: 8px 16px;
    height: 100%;

    transition: box-shadow 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
      -webkit-box-shadow 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
