import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [recipeInfo, setRecipeInfo] = useState();

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=bf4a972add1045af8cb38038eb4411e0&includeNutrition=true`
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
    <div>
        <h1>{meal.title}</h1>
        <img src={meal.image} alt="recipeImage" />
        {recipeInfo && 
        <ul className="details">
        <li>Your meal will be ready in {recipeInfo.readyInMinutes} minutes and feeds {recipeInfo.servings} people </li>
        <div dangerouslySetInnerHTML={{__html: recipeInfo.summary}}></div>
      </ul>}
          
        {recipeInfo && <a href={recipeInfo.sourceUrl}>Go to Recipe</a>}
      </div>
  );
}



