import React, { useState, useEffect } from "react";
import "./recipestyle.css";

export default function Meal({ meal }) {
  const [recipeInfo, setRecipeInfo] = useState();

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=3140829d85754b778fea173b75dc7939&includeNutrition=true`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecipeInfo(data);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);
  

  return (
    <div className="recipePage">
        <h1>{meal.title}</h1>
        <img src={meal.image} alt="recipeImage" />
        {recipeInfo && 
        <ul className="details">
        <li>Your meal will be ready in {recipeInfo.readyInMinutes} minutes and feeds {recipeInfo.servings} people </li>
        <div style={{ whiteSpace: "wrap"}} className="summary" dangerouslySetInnerHTML={{__html: recipeInfo.summary}}></div>
        <hr></hr>
      </ul>}
          
        {recipeInfo && <a href={recipeInfo.sourceUrl}>Go to Recipe</a>}
      </div>
  );
}



