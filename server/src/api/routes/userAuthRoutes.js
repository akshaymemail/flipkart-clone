import express from "express";
import {signup, signin} from '../controllers/userAuthControllers.js'

// CREATING  ROUTER
const userRouter = express.Router();

// SIGNUP ROUTE
userRouter.post("/signup", signup);

// SIGNIN ROUTE
userRouter.post("/signin", signin );

export default userRouter;