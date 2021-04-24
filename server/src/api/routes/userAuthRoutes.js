import express from "express";
import { userSigninValidator } from "../../validators/userAuthValidator.js";
import {signup, signin} from '../controllers/userAuthControllers.js'
import isRequestValidated from '../../validators/requestValidatedResult.js'

// CREATING  ROUTER
const userRouter = express.Router();

// SIGNUP ROUTE
userRouter.post("/signup" , signup);

// SIGNIN ROUTE
userRouter.post("/signin", userSigninValidator, isRequestValidated , signin );

export default userRouter;