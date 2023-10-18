import React, { useState } from "react";
import "../components/login-register.views.css";
import { Link } from "react-router-dom";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    const apiUrl = `http://localhost:4000/users/login`;
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        console.log(`response status: ${response.status}`);
        if (response.status === 200) {
          setIsUserLoggedIn(true);
        } else {
          setIsUserLoggedIn(false);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));

    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="Auth">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form
          className="login-form"
          onSubmit={handleSubmit}
          action="/users/login"
          method="POST"
        >
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@email.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="*******"
            id="password"
            name="password"
          />
          <button type="submit">Log In</button>
        </form>
        <Link to="/register">
          <button className="link-btn">
            Don't have an account? Register here.
          </button>
        </Link>
      </div>
    </div>
  );
};
