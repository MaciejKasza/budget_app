import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export const useBudgetContext = () => {
  const context = useContext(BudgetContext);

  if (!context) {
    throw Error("useBudgetContext must be used inside an BudgetContext");
  }

  return context;
};
