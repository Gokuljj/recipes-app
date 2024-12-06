const mongoose = require("mongoose");


// Define schema for a recipe
const recipeSchema = new mongoose.Schema({
    title: {type: String, required: true}, // Recipe name
    ingredients: {type: [String], required: true}, // List of ingredients   
    instructions: {type: String, required: true}, // How to prepare the recipe
    createdAt: {type: Date, default: Date.now} // Date when the recipe was created
});

// Export the Recipe model
module.exports = mongoose.model("Recipe", recipeSchema);