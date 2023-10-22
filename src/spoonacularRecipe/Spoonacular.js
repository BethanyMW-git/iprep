import React, { useState } from "react";
import RecipeList from "./recipeList";

export const Spoonacular = () => {

  const [searchRecipies, setSearchRecipies] = useState(null);
  const [query, setQuery] = useState("");



  function getRecipies () {
    fetch(
      //alternate apiKey to use if max call is reached df66c6a4c5mshbd849669f02df78p13d5acjsn92aef5adc0f7
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=bf4a972add1045af8cb38038eb4411e0`
    )
    .then((response) => response.json())
    .then((data) => {
      setSearchRecipies(data.results);
    })
    .catch(() => {
      console.log("error");
    });
  }


  function handleChange(e) {
    if ( e.target.value.length >= 3) {
    setQuery(e.target.value);
    } 

  }

  return (

    <div className="search">
        <input type='text' 
          placeholder="Search (e.g. Salmon)" 
          onChange={handleChange} />
          <button onClick={getRecipies}>Get your recipies</button>
      {searchRecipies && <RecipeList searchRecipies={searchRecipies} />}
    </div>
  );
}

// export default Spoonacular;
