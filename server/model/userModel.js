// Import mongoose for creating schemas and models
import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create and export the User model based on the user schema
export default mongoose.model("User", userSchema);
