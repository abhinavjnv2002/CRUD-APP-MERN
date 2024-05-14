import express from "express"; 
import mongoose from "mongoose";  
import bodyParser from "body-parser";  
import dotenv from "dotenv"; 
import cors from "cors";  
import route from "./routes/userRoute.js";  

// Initialize Express app
const app = express();

// Middleware setup
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS for all requests
dotenv.config(); // Load environment variables from .env file

// Define port number for the server to listen on
const PORT = process.env.PORT || 7000; 

// Retrieve MongoDB connection URL from environment variables
const URL = process.env.MONGOURL;

// Connect to MongoDB using Mongoose
mongoose.connect(URL).then(() => {
    console.log("DB connected successfully");

    // Start the Express server once the database connection is established
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
}).catch(error => console.log(error));

// Define routes for user API under the /api endpoint
app.use("/api", route);
