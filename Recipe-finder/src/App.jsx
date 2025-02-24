import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (query) => {
    setLoading(true);
    const API_KEY = "0ffdb3a313854a1bb7aaadbbaadbf3b4" // Replace with your Spoonacular API key
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=40&apiKey=${API_KEY}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      
      setRecipes(data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-black p-4">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Recipe Finder
      </h1>
      <SearchBar fetchRecipes={fetchRecipes} />
      {loading ? (
        <p className="text-center text-lg font-semibold text-gray-500 mt-4">
          Loading recipes...
        </p>
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
};

export default App;