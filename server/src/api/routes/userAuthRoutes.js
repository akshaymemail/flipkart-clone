import express from "express";
import signup from "../controllers/userAuthControllers.js";

// CREATING  ROUTER
const userRouter = express.Router();

// SIGNUP ROUTE
userRouter.post("/signup", signup);

// SIGNIN ROUTE
userRouter.post("/signin", (req, res) => {
  // TODO...
});

export default userRouter;