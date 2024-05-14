import express from "express";
import{create,deleteUser,getall,getone, update} from "../controller/userController.js"

// Create a new Express router instance
 const route = express.Router();

 // Define routes for various user operations
 route.post("/create", create);
 route.get("/getall",getall);
 route.get("/getone/:id",getone);
 route.put("/update/:id",update);
 route.delete("/delete/:id",deleteUser);
 
 export default route;



