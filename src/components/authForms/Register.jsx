import React, { useState } from "react";
import { useRegister } from "../../hooks/useRegister";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [seccondaryPassword, setSeccondaryPassword] = useState("");
  const [email, setEmail] = useState("");
  const { loading, error, handleRegister } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(username, email, password, seccondaryPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (error && error.hasOwnProperty(name)) {
      delete error[name];
    }

    name === "username" ? setUsername(value) : null;

    name === "password" ? setPassword(value) : null;

    name === "email" ? setEmail(value) : null;

    name === "seccondaryPassword" ? setSeccondaryPassword(value) : null;
  };

  return (
    <StyledFormWraper loading={loading === true ? "true" : ""}>
      <StyledFormContent>
        <h2>Sign Up</h2>
        <StyledForm onSubmit={handleSubmit}>
          <StyledError>
            {error?.global ? <span>{error?.global}</span> : null}
          </StyledError>
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
              type="text"
              name="email"
              label="E-mail"
              placeholder=""
              value={email}
              onChange={handleInputChange}
              error={error?.email ? error?.email : null}
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
          <div>
            <Input
              type="password"
              name="seccondaryPassword"
              label="Repeat password"
              placeholder=""
              value={seccondaryPassword}
              onChange={handleInputChange}
              error={
                error?.seccondaryPassword ? error?.seccondaryPassword : null
              }
              disabled={loading}
            />
          </div>
          <StyledLinks>
            <a href="#">Forgot Password?</a>
            <Link to="/login">Signin</Link>
          </StyledLinks>
          <Button type="submit" loading={loading} text={"Register"} />{" "}
        </StyledForm>
      </StyledFormContent>
    </StyledFormWraper>
  );
}

export default Register;

const StyledFormWraper = styled.div`
  position: absolute;
  top: 10%;
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

  @media (max-width: 600px) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    transform: translateX(0);
  }
`;

const StyledError = styled.div`
  min-height: 20px;
  text-align: center;
  padding: 10px 0;
  span{
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.m};
    color: ${({ theme }) => theme.fontColors.error};
  }
`

const StyledFormContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
  gap: 10px;
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
