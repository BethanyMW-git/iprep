import React from "react";
import "../Homepage.css";
// import Button from "react-bootstrap/Button";

export const Logout = ({ onHandleLogout }) => {
  const handleLogout = async (e) => {
    e.preventDefault();

    const apiUrl = `http://localhost:4000/users/logout`;
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(`response status: ${response.status}`);
        onHandleLogout();
      })
      .catch((error) => console.error("Error fetching data:", error));

    console.log("sup dude I logged out");
  };

  return (
    <div>
      <button id="logout-button" onClick={handleLogout}>
        Logout yo
      </button>
    </div>
  );
};
