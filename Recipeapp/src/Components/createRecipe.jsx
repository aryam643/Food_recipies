import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: "",
    steps:"",
    imageUrl: "",
    userId: window.localStorage.getItem("id")
  });
  console.log("userId:", recipe.userId);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };
  const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Recipe Data:", recipe); 
    axios.post('http://localhost:3001/recipe/create-recipe', recipe)
      .then(result => {
        navigate('/')
        console.log(result.data);
        alert("Recipe Added");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='p-3 border border-1 w-25'>
        <h3>Add Your Own Recipes</h3>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder='Enter Name'
              className='form-control'
              name="name"
              autoComplete="on"
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              placeholder='Enter Description'
              className='form-control'
              name="description"
              autoComplete="off"
              onChange={handleChange}
            />
            </div>
          <div className='mb-3'>
            <label htmlFor="ingredients">Ingredients</label>
            <input
              type="text"
              placeholder='Enter Ingredients'
              className='form-control'
              name="ingredients"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              placeholder='Enter URL'
              className='form-control'
              name="imageUrl"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className='btn btn-success w-100 mt-2'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateRecipe;
