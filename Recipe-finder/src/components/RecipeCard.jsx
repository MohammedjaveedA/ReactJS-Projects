import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-gray-400 shadow-md rounded-lg overflow-hidden">
      {/* Safeguard for missing images */}
      <img
        src={recipe.image || "https://via.placeholder.com/312x231"}
        alt={recipe.title || "Recipe"}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {recipe.title || "Untitled Recipe"}
        </h2>
        {/* Use summary with a fallback */}
        <p
          className="text-gray-600"
          dangerouslySetInnerHTML={{
            __html: recipe.summary ? recipe.summary.slice(0, 100) + "..." : "No description available.",
          }}
        ></p>
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
          onClick={() => window.open(`https://spoonacular.com/recipes/${recipe.title?.replaceAll(" ", "-")}-${recipe.id}`, "_blank")

          }
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;