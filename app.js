const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConfig");
const recipeRoutes = require("./routes/recipeRoutes");


dotenv.config();    //Load environment variables
connectDB();   //Connect to MongoDB

const app = express();
app.use(bodyParser.json());  //Middleware to parse JSON request bodies
app.use('/api', recipeRoutes);  //adding routes with /api prefix

// Root Route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Recipe App',
        availableRoutes: {
            recipes: '/api/recipes',
            getRecipeById: '/api/recipes/:id',
            createRecipe: '/api/recipes',
            updateRecipe: '/api/recipes/:id',
            deleteRecipe: '/api/recipes/:id'
        }
    });
});

// Add default route for /api
app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the Recipe App',
        endpoints: {
            createRecipe: 'POST /api/recipes',
            getAllRecipes: 'GET /api/recipes',
            getRecipeById: 'GET /api/recipes/:id',
            updateRecipe: 'PUT /api/recipes/:id',
            deleteRecipe: 'DELETE /api/recipes/:id'
        }
    });
});

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});


// start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));