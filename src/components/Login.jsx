import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import styled from "styled-components";

const Login = ({ props }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, handleLogin } = useLogin();

  console.log(props);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledTest></StyledTest>
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
};

export default Login;

const StyledTest = styled.div`
  width: 100px;
  height: 250px;
  background-color: ${({ theme }) => theme.colors.green};
`;
