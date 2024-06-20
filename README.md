# Food Recipe App

This project is a full-stack web application for managing and sharing food recipes. It includes user authentication, the ability to create, read, update, and delete recipes, and user-specific saved recipes.

## Project Structure

- **Frontend**: Built with React.
- **Backend**: Built with Node.js and Express.
- **Database**: MongoDB for data storage.
- **Authentication**: JWT for secure authentication.
- **Hosting**: The backend is hosted on Vercel.

## Features

- User registration and login with JWT authentication.
- Create, read, update, and delete recipes.
- Users can save their favorite recipes.
- Secure backend with CORS enabled for cross-origin requests.

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB (local or cloud-based)

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/aryam643/food_back.git
    cd food_back
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```env
    MONGODB_URI=<your_mongodb_uri>
    SECRET_KEY=<your_secret_key>
    PORT=<your_port>
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Clone the frontend repository:
    ```
    git clone https://github.com/aryam643
    ```
2. Install Dependencies:
   ```
   npm install
   ```
3. Setup environment variables

  Create a .env file in the root of the project and add the following:
    ```
      MONGODB_URI=your_mongodb_connection_string
      SECRET_KEY=your_secret_key
      PORT=your_port_number
    ```
4. Start the backend server
    ```
    npm start
    ```
5. Clone the frontend repository
    ```
    git clone https://github.com/aryam643/Food_recipies.git
    cd Food_recipies
    ```
6. Install frontend dependencies
    ```
    npm install
    ```
7. Start the frontend server
    ```
    npm run dev
    ```
### Usage
- Navigate to http://localhost:5173 in your web browser.
- Register a new account or login with existing credentials.
- Create new recipes, view existing recipes, and save your favorite recipes.
### API Endpoints
  ## Auth Routes
  - POST /auth/register - Register a new user
  - POST /auth/login - Login a user
  - GET /auth/logout - Logout a user
### Recipe Routes
 - POST /recipe/create-recipe - Create a new recipe
 - GET /recipe/recipes - Get all recipes
 - GET /recipe/read-recipe/:id - Get a specific recipe by ID
 - GET /recipe/saved-recipes/:id - Get saved recipes for a user
 - GET /recipe/user-recipes/:id - Get recipes created by a specific user
 - PUT /recipe - Save a recipe to a user's saved recipes
### Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.

### Acknowledgements
Node.js
Express
React
MongoDB
Bootstrap
Axios


