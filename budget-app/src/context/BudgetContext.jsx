import { createContext, useEffect, useReducer } from "react";

export const BudgetContext = createContext();

const initState = () => {
  return { budgetList: [] };
};

export const budgetReducer = (state, action) => {
  switch (action.type) {
    case "GET":
      console.log("GET");
      return { budgetList: action.payload };
    case "ADD":
      console.log("ADD");
      return { budgetList: [...state.budgetList, action.payload] };
    case "DELETE":
      console.log("DELETE");
      return { user: action.payload };
    case "EDIT":
      console.log("EDIT");
      return { user: action.payload };
    default:
      return state;
  }
};

export const BudgetContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, null, initState);

  useEffect(() => {}, []);

  return (
    <BudgetContext.Provider value={{ ...state, dispatch }}>
      {console.log("BudgetContext state: ", state)}
      {children}
    </BudgetContext.Provider>
  );
};
