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

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});


// start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));