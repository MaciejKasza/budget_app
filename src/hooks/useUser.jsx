import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { validateLoginForm } from "../utils/validate";

export function useUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleFetchUser = async (username, password) => {
    setLoading(true);
    setError(null);

    // uderzenie w celu zalogowania
    try {
      // const response = await axios.post("http://localhost:8080/login", {
      //   username,
      //   password,
      // });
      const response = {
        name: "maciej kasza",
        email: "maciejkasza@gmail.com",
        profileUrl:
          "https://scroll.morele.net/wp-content/uploads/2021/06/Profilowe.jpg",
        id: "123",
      };

      return response;
    } catch (error) {
      setError("Error while fetching user data");
      console.error("Error while fetching user data", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleFetchUser,
  };
}
