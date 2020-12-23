import React from 'react'
import RecipeItem from "../COMPONENT/RecipeItem";

const Recipe = (props) => {
    const {recipes} = props
    return (
        <div className="row">
            {
                recipes.map(data => <RecipeItem 
                    label={data.recipe.label} 
                    image={data.recipe.image}
                    ingredientLines={data.recipe.ingredientLines}
                /> )
            }

        </div>
    )
}

export default Recipe
