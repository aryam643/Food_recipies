import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Don't forget to import axios

function Nav() {
  const handleLogout = () => {
    window.localStorage.clear();
    axios.get('http://localhost:3001/auth/logout')
      .then(result => window.location.reload())
      .catch(err => console.log(err));
  };

  // Check if user is logged in based on localStorage data
  const isLoggedIn = window.localStorage.getItem("id");

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand nav-link text-white" to="/">Food Recipes</Link>
            <ul className="navbar-nav ms-3 me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/recipe/create-recipe">Add Your Own Recipe</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/recipe/saved-recipe">Favourites</Link>
              </li>
            </ul>
            {isLoggedIn ? ( // If user is logged in
              <button className="btn btn-outline-light" onClick={handleLogout}>
                Logout
              </button>
            ) : ( // If user is not logged in
              <button className="btn btn-outline-light">
                <Link to="/auth/register" className='text-decoration-none'>Login/Register</Link>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
