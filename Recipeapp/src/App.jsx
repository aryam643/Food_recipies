import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Home from './Components/Home';
import Nav from './Components/Nav';
import CreateRecipe from './Components/createRecipe.jsx';
import SavedRecipe from './Components/savedRecipe.jsx';
import ReadRecipe from './Components/radRecipe.jsx';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/register" element={<Registration />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/recipe/create-recipe" element={<CreateRecipe />} />
          <Route path="/recipe/saved-recipe" element={<SavedRecipe />} />
          <Route path="/read-recipe/:id" element={<ReadRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
