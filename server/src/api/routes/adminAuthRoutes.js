import express from "express";
import { signin, signup } from "../controllers/adminAuthControllers.js";
import { adminSigninValidator, adminSignupValidator } from "../../validators/adminAuthValidator.js";
import isRequestValidated from "../../validators/requestValidatedResult.js";

const adminRouter = express.Router();

// ADMIN SIGNUP ROUTE
adminRouter.post("/signup", adminSignupValidator, isRequestValidated , signup);

// ADMIN SIGNIN ROUTE
adminRouter.post("/signin", adminSigninValidator, isRequestValidated, signin);

export default adminRouter;
