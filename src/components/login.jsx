import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../components/login-register.views.css";
import { Link } from "react-router-dom";
import { loggedIn, setUserName } from "../redux/userReducer";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const setUserLoggedIn = (isLoggedIn) => dispatch(loggedIn(isLoggedIn));
  const setUserAccountName = (name) => dispatch(setUserName(name))

  const handleSubmit = (e) => {
    const apiUrl = `http://localhost:4000/users/login`;
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        console.log(`response status: ${response.status}`);
        if (response.status === 200) {
          setUserLoggedIn(true);
          response.json().then(json => {
            console.log(`user's name: ${json.name}`);
            setUserAccountName(json.name);
            navigate("/");
          });
        } else {
          // TODO: add error handling. Which means what happens if they are not able to log in.
          // Then show an error message.
          setUserLoggedIn(false);
          setHasError(true);
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
        {hasError && <div>{"There was an error"}</div>}
        <form className="login-form" onSubmit={handleSubmit}>
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
