import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";

const Login = ({ props }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, handleLogin } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (error.hasOwnProperty(name)) {
      delete error[name];
    }

    name === "username" ? setUsername(value) : null;

    name === "password" ? setPassword(value) : null;
  };

  return (
    <StyledFormWraper loading={loading === true ? "true" : ""}>
      <StyledFormContent>
        <h2>Sign In</h2>
        <StyledForm onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              name="username"
              label="Username"
              placeholder=""
              value={username}
              onChange={handleInputChange}
              error={error?.username ? error?.username : null}
              disabled={loading}
            />
          </div>
          <div>
            <Input
              type="password"
              name="password"
              label="Password"
              placeholder=""
              value={password}
              onChange={handleInputChange}
              error={error?.password ? error?.password : null}
              disabled={loading}
            />
          </div>
          <StyledLinks>
            <a href="#">Forgot Password?</a>
            <Link to="/register">Signup</Link>
          </StyledLinks>
          <Button loading={loading} text={"Login"} type={"submit"} />
        </StyledForm>
      </StyledFormContent>
    </StyledFormWraper>
  );
};

export default Login;

const StyledFormWraper = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  background: ${({ theme }) => theme.colors.bgUnit1};
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 9);

  cursor: ${({ loading }) => (loading === "true" ? "wait" : "auto")};
`;

const StyledFormContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxl}; // moze ręcznie
    color: ${({ theme }) => theme.fontColors.primary};
    text-transform: uppercase;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StyledLinks = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;

  a {
    color: ${({ theme }) => theme.fontColors.secondary};
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.fontColors.primary};
    }
  }
  a:nth-child(2) {
    color: ${({ theme }) => theme.fontColors.purpure};
    font-weight: 600;
    &:hover {
      color: ${({ theme }) => theme.fontColors.darkPurpure};
    }
  }
`;
