import React, { useEffect, useState } from "react";
import { useUserLogin } from "../hooks/useUserLogin";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import ROUTES from "../routes/Routes";

const initialFormData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { login } = useUserLogin();
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    const { email, password } = formData;
    login(email, password);

    navigate(ROUTES.MAIN_DASHBOARD, { replace: true });
  };

  return (
    <>
      <div className="container">
        <h2>Register Page</h2>
        <div className="form">
          <div className="row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="row">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        <div>
          Register: <Link to={ROUTES.REGISTER}>Register page</Link>
        </div>
      </div>
    </>
  );
};
