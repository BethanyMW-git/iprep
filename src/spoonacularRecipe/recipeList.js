import React from "react";
import Meal from "./recipe";



export default function RecipeList({ searchRecipies }) {
    console.log(searchRecipies);

    return (
        <>
            {searchRecipies.map((recipe) => {
                return (

                        <div key={recipe.id} className="information">
                            <Meal meal={recipe} />
                        </div>
                )
            }) }
        </>
        
    )

}



