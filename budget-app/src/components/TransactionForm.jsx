import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Input } from "./formComponents/Input";
import { Textarea } from "./formComponents/Textarea";
import { DataPickerInput } from "./formComponents/DataPickerInput";
import { Select } from "./formComponents/Select";
import { Button } from "./formComponents/Button";
import { FaPlus } from "react-icons/fa";

export const TransactionForm = ({ type }) => {
  const [inputState, setInputState] = useState({
    name: "",
    amount: "",
    date: new Date(),
    category: "",
    description: "",
  });

  const hadleInputChange = (e) => {
    const { name, value } = e.target;
    setInputState({ ...inputState, [name]: value });
    // setError('')
  };

  const hadleSelectChange = (e) => {
    const { name, value, className } = e.target;
    setInputState({ ...inputState, [name]: value });
    // if (!className.includes("selected")) e.target.className += "selected";
  };

  const hadleTextAreaChange = (e) => {
    const { name, value } = e.target;
    setInputState({ ...inputState, [name]: value });

    // setError('')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (type) {
      case "income":
        console.log("Submit income", inputState);
        break;
      case "expense":
        console.log("Submit expense", inputState);
        break;
      default:
        console.log("Wrong form type");
        break;
    }
  };

  return (
    <StyledTransactionForm>
      <div className="row">
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Income name"
          value={inputState.name}
          onChange={hadleInputChange}
        />
      </div>
      <div className="row">
        <Input
          id="amount"
          name="amount"
          type="text"
          placeholder="Salary amount"
          value={inputState.amount}
          onChange={hadleInputChange}
        />
      </div>
      <div className="row">
        <DataPickerInput
          id="date"
          name="date"
          placeholder="Enter a date"
          value={inputState.date}
          dateFormat={"dd/MM/yyyy"}
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>
      <div className="row">
        <Select
          id="category"
          name="category"
          value={inputState.category}
          onChange={hadleSelectChange}
          placeholder={"Category"}
        />
      </div>
      <div className="row">
        <Textarea
          name="description"
          id="description"
          placeholder="Description"
          rows={5}
          value={inputState.description}
          onChange={hadleTextAreaChange}
        />
      </div>
      <div className="row" style={{ margin: "0  0 0 auto  " }}>
        <Button onClick={handleSubmit} color={"#FAF6F9"} bgColor={"#42AD00"}>
          <FaPlus />
          Add {type}
        </Button>
      </div>
    </StyledTransactionForm>
  );
};

const StyledTransactionForm = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 32px; */
  padding-top: 24px;

  .row {
    margin: 12px 0;
  }
`;
