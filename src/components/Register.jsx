import React, { useState } from "react";
import { useRegister } from "../hooks/useRegister";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, handleRegister } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Register;
