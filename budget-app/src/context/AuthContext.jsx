import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

const initState = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) return { user };
  return { user: null };
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("LOGIN");
      return { user: action.payload };
    case "LOGOUT":
      console.log("LOGOUT");
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, null, initState);

  useEffect(() => {
    if (state.user) {
      dispatch({ type: "LOGIN", payload: state.user });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {console.log("AuthContext state: ", state)}
      {children}
    </AuthContext.Provider>
  );
};
