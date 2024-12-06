const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");    

// Routes for CRUD Operation on recipes
router.post('/recipes', recipeController.createRecipe); // Create a new recipe
router.get('/recipes', recipeController.getAllRecipes); // Get all recipes
router.get('/recipes/:id', recipeController.getRecipeById); // Get a single recipe by ID
router.put('/recipes/:id', recipeController.updateRecipe); // Update a recipe
router.delete('/recipes/:id', recipeController.delteRecipe); // Delete a recipe

module.exports = router;