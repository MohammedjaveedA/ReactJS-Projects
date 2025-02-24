import React, { useState } from "react";

const SearchBar = ({ fetchRecipes }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchRecipes(query);
    }
    // setQuery("")
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-4 mb-6"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes (e.g., pasta, chicken)"
        className="w-full max-w-lg p-3 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;