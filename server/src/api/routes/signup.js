import express from "express";
import signup from "../controllers/authControllers/signup.js";

// CREATING  ROUTER
const signUpRouter = express.Router();

// SIGNUP ROUTE
signUpRouter.post("/signup", signup);

export default signUpRouter;