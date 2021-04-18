import express from "express";
import signup from "../controllers/auth/signup.js";

// CREATING  ROUTER
const userRouter = express.Router();

// SIGNIN ROUTE
userRouter.post("/signin", (req, res) => {
  // TODO...
});

// SIGNUP ROUTE
userRouter.post("/signup", signup);

export default userRouter;