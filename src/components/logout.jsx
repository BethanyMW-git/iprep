import React from "react";
import "./Homepage.css";
import Button from "react-bootstrap/Button";

export const Logout = () => {
    const handleLogout = (e) => {
        const apiUrl = `http://localhost:4000/users/logout`;
        fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            console.log(`response status: ${response.status}`);
          })
          .catch((error) => console.error("Error fetching data:", error));
    
        e.preventDefault();
        console.log("logged out")
      };

      return (
        <div>
            <button id="logout-button" onClick={handleLogout}>Logout</button>
        </div>
        
    )
} 

