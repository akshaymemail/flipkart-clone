import { body } from "express-validator";
export const adminSigninValidator = [
    body('email').notEmpty().withMessage('email is required!'),
    body('email').isEmail().withMessage('a valid email is required!'),
    body("password").notEmpty().withMessage("password shouldn't be empty!"),
    body("password").isLength({ min: 6 }).withMessage("password must be atleast 6 char!")
]