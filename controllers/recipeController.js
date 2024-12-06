const Recipe = require("../model/Recipe");
const mongoose = require("mongoose");

// Create a new recipe
exports.createRecipe = async (req, res) => {
   try {
       const recipe = new Recipe(req.body); //req.body containes Json data from the client
       const savedRecipe = await recipe.save(); //saves the recipe to the database
       res.status(201).json(savedRecipe); //send the saved recipe
   } catch (error) {
       res.status(400).json({message: error.message}); // Handle errors
   }
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find(); //find all recipes
        res.json(recipes);  //send the fetched recipes
        // res.json({message: "Recipes fetched successfully"});
    } catch (error) {
        res.status(500).json({message: error.message}); // Internal Error
    }
};


// Get a single recipe by ID 
exports.getRecipeById = async (req, res) => {
    const { id } = req.params;

    // validate id format
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Invalid recipe ID format"});
    }

    try {
        const recipe = await Recipe.findById(id); //find recipe by id
        if (!recipe) {
            return res.status(404).json({error: "No such recipe"})
        } 
        res.json(recipe);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// update a recipe ///
exports.updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRecipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json(updatedRecipe); // Send updated recipe
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a recipe 
exports.delteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id); //delete the recipe
        if (!deletedRecipe) {
            return res.status(404).json({error: "No such recipe"});
        } 
        res.json({message: "Recipe deleted successfully"});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
