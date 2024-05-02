import React, { useState } from "react";
import { useUserRegister } from "../hooks/useUserRegister";

const initialFormData = {
  email: "t",
  password: "t",
  name: "t",
};

export const RegisterPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { register } = useUserRegister();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    const { email, password, name } = formData;
    register(email, password, name);
  };

  return (
    <>
      <div className="container">
        <h2>Register</h2>
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
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
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
      </div>
    </>
  );
};
