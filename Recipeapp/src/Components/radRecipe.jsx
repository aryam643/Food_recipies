import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ReadRecipe() {
  const { id } = useParams();
  const userId = window.localStorage.getItem("id");
  const [recipe, setRecipe] = useState(null);
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const getRecipe = () => {
      axios.get(`http://localhost:3001/recipe/read-recipe/${id}`)
        .then(result => {
          setRecipe(result.data);
        })
        .catch(error => console.log(error));
    };

    const fetchSavedRecipes = () => {
      if (userId) { // Ensure userId is not null
        axios.get(`http://localhost:3001/recipe/saved-recipes/${userId}`)
          .then(result => {
            setSavedRecipes(result.data.savedRecipes || []); // Initialize to empty array if null
          })
          .catch(error => console.log(error));
      }
    };

    fetchSavedRecipes();
    getRecipe();

  }, [id, userId]);

  const saveToFavourites = (recipeId) => {
    axios.put('http://localhost:3001/recipe', { userId, recipeId })
      .then(result => {
        setSavedRecipes(result.data.savedRecipes);
      })
      .catch(err => console.log(err));
  };

  const isRecipeSaved = (id) => savedRecipes && savedRecipes.includes(id); // Ensure savedRecipes is not null

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="text-center">
            <img
              src={recipe.imageUrl}
              alt={recipe.name}
              className="img-fluid"
              style={{ maxWidth: '80%', maxHeight: '90%', borderRadius: '8px' }} // Adjust image size and style here
            />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="my-4">{recipe.name}</h2>
          <button
            className="btn btn-primary mb-3"
            onClick={() => saveToFavourites(recipe._id)}
            disabled={isRecipeSaved(recipe._id)}
          >
            {isRecipeSaved(recipe._id) ? "Added" : "Add to Favorites"}
          </button>
          <h5>Description:</h5>
          <p>{recipe.description}</p>
          <h5>Ingredients:</h5>
          <p>{recipe.ingredients}</p>          
        </div>
      </div>
    </div>
  );
}

export default ReadRecipe;
