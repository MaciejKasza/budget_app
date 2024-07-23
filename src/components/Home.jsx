import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function Home() {
  const navigate = useNavigate();
  const { auth, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/protected", {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={fetchData}>Fetch Protected Data</button>
    </div>
  );
}

export default Home;
