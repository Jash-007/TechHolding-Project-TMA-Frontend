import React, { useState } from "react";
import "../Components/css/login.css";
import { getToken } from "../Utls/auth";

const Login = () => {
  const [User, setUser] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/dev/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ demail: User.email, dpass: User.password }),
    });
    const res = await response.json();
    console.log(res);
    if (res) {
      //save the auth token to local storage and redirect
      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("Authorization", res.token);
      window.location.href = "/";
    } else {
      alert("Enter Valid Credentials");
    }
  };
  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="email"
            id="email"
            name="email"
            value={User.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={User.password}
            onChange={handleChange}
          />

          <button type="submit" >Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
