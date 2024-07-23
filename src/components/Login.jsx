import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, handleLogin } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
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
        {loading ? "Logging in..." : "Login"}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login;
