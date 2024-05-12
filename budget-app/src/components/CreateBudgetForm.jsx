import styled from "styled-components";
import { FormInput } from "./FormInput";
import { Button } from "./formComponents/Button";
import { useState } from "react";
import { useBugetAdd } from "../hooks/budget/useBugetAdd";

export const CreateBudgetForm = ({ budgets }) => {
  const [formData, setFormData] = useState({ name: "", amount: "" });
  const { addBudget, error, isLoading } = useBugetAdd();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Submit", formData);
    addBudget(formData.name, formData.amount);
  };

  return (
    <StyledForm>
      <FormInput
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        label={"Budget Name"}
      />
      <FormInput
        name="amount"
        value={formData.amount}
        onChange={handleInputChange}
        label={"Budget Amount"}
      />
      <Button onClick={handleSubmit} color={"#111c1d"}>
        Create budget
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  display: grid;
  gap: 16px;
  width: 100%;

  height: 250px;
`;
