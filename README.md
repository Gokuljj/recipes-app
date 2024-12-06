
# Recipe App API


## Recipe App Link
https://recipes-app-dgz7.onrender.com



## Overview
This project is a CRUD (Create, Read, Update, Delete) API for managing recipes. Built with Node.js, Express.js, and MongoDB (using Mongoose), it follows the MVC pattern for clean and scalable code architecture. The API allows users to create, retrieve, update, and delete recipes, and includes error handling and validation.

---

## Features
- **Create a Recipe**: Add new recipes with a title, ingredients, and instructions.
- **Retrieve Recipes**:
  - Get all recipes.
  - Get a single recipe by its ID.
- **Update a Recipe**: Modify existing recipes using their ID.
- **Delete a Recipe**: Remove a recipe from the database by ID.

---

## Tech Stack
- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for handling routes and middleware.
- **MongoDB**: NoSQL database for storing recipes.
- **Mongoose**: ODM library for MongoDB to manage schema and validation.
- **Postman**: Used for API testing and documentation.

---

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Gokuljj/recipes-app.git
   cd recipes-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory and add the following:
     ```env
     PORT=5000
     MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/recipesDB?retryWrites=true&w=majority
     ```
## Provided Instruction to user
   # link to use(optional)
   MONGO_URI = mongodb+srv://user_1:userPass1234@cluster0.5e8fz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

## Instruction to Validate 
   # Use tools like
   MongoDB Compass: For GUI-based validation.
   Mongoose or MongoClient: in a Node.js script.
   Postman: if testing in API

4. **Start the Server**:
   ```bash
   node app.js
   ```
   The server will run on `http://localhost:5000`.

---

## API Endpoints

### Base URL: `http://localhost:5000/api`

| **HTTP Method** | **Endpoint**           | **Description**                  |
|------------------|------------------------|----------------------------------|
| **POST**         | `/recipes`            | Create a new recipe.            |
| **GET**          | `/recipes`            | Retrieve all recipes.           |
| **GET**          | `/recipes/:id`        | Retrieve a recipe by ID.        |
| **PUT**          | `/recipes/:id`        | Update a recipe by ID.          |
| **DELETE**       | `/recipes/:id`        | Delete a recipe by ID.          |

---

## Use this Sample RecipeSchema for creating , updating
```json
{
    "title": "Chicken Briyani",
    "ingredients": ["Rice", "Chicken","Briyani Masala"],
    "instructions": "Cook for 30min using Cooker"
}
```

---

## Example Recipe Schema
Each recipe in the database follows this structure:

```json
{
    "_id": "648fcde8d94e16a69ef12345",
    "title": "Curd Rice",
    "ingredients": ["Rice", "Yogurt", "Curry Leaves", "Mustard Seeds"],
    "instructions": "Mix cooked rice with yogurt and temper with mustard seeds and curry leaves.",
    "createdAt": "2024-12-05T10:15:30.000Z"
}
```

---

## Get Recipe by ID Process

To retrieve a specific recipe by its MongoDB **ObjectId**, follow these steps:

### **Endpoint**
Use the `GET` method with the following endpoint:
```
http://localhost:5000/api/recipes/:id
```
Replace `:id` with the actual MongoDB ObjectId of the recipe.

---

### **Example Request**
```http
GET http://localhost:5000/api/recipes/648fcde8d94e16a69ef12345
```

---

### **Expected Responses**

1. **Success (Recipe Found)**:
   If the recipe exists, you'll receive a response like this:
   ```json
   {
       "_id": "648fcde8d94e16a69ef12345",
       "title": "Curd Rice",
       "ingredients": ["Rice", "Yogurt", "Curry Leaves", "Mustard Seeds"],
       "instructions": "Mix cooked rice with yogurt and temper with mustard seeds and curry leaves.",
       "createdAt": "2024-12-05T10:15:30.000Z",
       "__v": 0
   }
   ```

2. **Recipe Not Found**:
   If the `id` is valid but does not exist in the database:
   ```json
   {
       "message": "Recipe not found"
   }
   ```

3. **Invalid ObjectId**:
   If the `id` is not a valid MongoDB ObjectId (e.g., `123` instead of `648fcde8d94e16a69ef12345`):
   ```json
   {
       "message": "Invalid recipe ID format"
   }
   ```

---

## Testing
- Use **Postman** or any HTTP client to test the API endpoints.
- Example requests and responses are provided in the API documentation.

---

## Future Improvements
- Implement user authentication and authorization.
- Add pagination for fetching recipes.
- Include image uploads for recipes.
- Enhance validation and error handling.

---

## Author
Developed by [Gokul Prasath J].  
---

## License
This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
