import { useState } from "react";
import { useBudgetContext } from "../useBudgetContext";
import { useNavigate } from "react-router-dom";
import { addBudgetAPI } from "../../api/ProductApi";

export const useBugetAdd = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useBudgetContext();

  const addBudget = async (name, amount) => {
    setIsLoading(true);
    setError(null);

    //uderzenei do API w celu rejestracji
    // const response = await fetch(uri, {
    //   method: "POST",
    //   headers: { "Content-Type": " application.json" },
    //   body: JSON.stringify({ email, password }),
    // });
    //Rozpakowanie odpowiedzi
    // const json = await response.json();

    //MOCK
    const response = { ok: true };
    const json = await addBudgetAPI(name, amount);

    //Jeśli statsu nie jest ok(!200)
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //aktualiacji bunget contextu
      dispatch({ type: "ADD", payload: json });

      setIsLoading(false);

      console.log("Add budget complete");
    }
  };

  return { addBudget, isLoading, error };
};
