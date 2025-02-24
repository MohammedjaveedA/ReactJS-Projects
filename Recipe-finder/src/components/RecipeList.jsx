import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return (
      <p className="text-center text-white">
        Try searching for something !
      </p>
    );
  }
  //recipes will be available in the api 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;