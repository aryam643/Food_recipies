import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/recipe/recipes')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='container mt-4'>
      <h2 className='mb-4'>Recipes</h2>
      <div className='row'>
        {recipes.map(recipe => (
          <div key={recipe._id} className='col-md-4 mb-4'>
            <div className='card'>
              <Link to={`/read-recipe/${recipe._id}`} className='text-decoration-none'>
                <img src={recipe.imageUrl} className='card-img-top' alt={recipe.name} />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>{recipe.name}</h5>
                
                <Link to={`/read-recipe/${recipe._id}`} className='btn btn-primary'>
                  Read Recipe
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
